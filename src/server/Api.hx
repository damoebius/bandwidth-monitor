package server;

import tink.http.Handler;
import tink.http.middleware.Static;
import conf.IConfig;
import tink.http.containers.*;
import tink.http.Response;
import tink.web.routing.*;

class Api {
	public static function main() {

		trace(haxe.macro.Compiler.getDefine("version"));
		var config:IConfig = haxe.Json.parse(haxe.Resource.getString("conf"));

		var container = new NodeContainer(config.port);
		var router = new Router<ApiRoute>(new ApiRoute());
		var staticMiddleware = new Static("..","/");
		var handler:Handler = req -> router.route(Context.ofRequest(req)).recover(OutgoingResponse.reportError);
		container.run(staticMiddleware.apply(handler));
	}
}

class ApiRoute {
	public function new() {	}

	@:sub public var api:Root = new Root();
}

class Root {

	public function new() {	}

	@:get('/')
	@:get('/$name')
	public function serve(name = 'index.html')
		return 'Hello, $name!';
}
