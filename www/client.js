console.log("client");

let oReq = new XMLHttpRequest();
oReq.open("GET", "/data.jpg?cacheKiller=" + Math.random(), true);
oReq.responseType = "arraybuffer";
let dataSize = 0;
oReq.onload = function (oEvent) {
    let endDate = new Date();
    dataSize = oEvent.total  / 1024 / 1000;
    let duration = (endDate.getTime() - startDate.getTime()) / 1000; 
    document.getElementById('downloadSpan').innerHTML = dataSize / duration + ' Mo/s';
  var arrayBuffer = oReq.response;
    startDate = new Date();
    sReq.send(arrayBuffer);
};

let sReq = new XMLHttpRequest();
sReq.open("POST", "/index.html", true);
sReq.onload = function (oEvent) {
    let endDate = new Date();
    let duration = (endDate.getTime() - startDate.getTime()) / 1000; 
    document.getElementById('uploadSpan').innerHTML = dataSize / duration + ' Mo/s';
};

let startDate = new Date();
oReq.send(null);