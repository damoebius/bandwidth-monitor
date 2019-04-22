
const express = require('express')
const app = express()

app.use(express.static('www'));

app.post('/api/test/upload', function (req, res) {
  res.send('')
})

app.get('/api/test/download', function (req, res) {
    let startDate = new Date();
    const duration = 30000;
    let currentDate = new Date();
    let buff = Buffer.alloc(50, 'a');
    while(currentDate.getTime() - startDate.getTime() < duration){
        currentDate = new Date();        
        res.write(buff,'binary');
    }
    res.end(buff,'binary');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

