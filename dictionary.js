var port = 23654;
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
app.use(require('express').static('public'));

app.get('/', function (req, res) {
  res.send('dictionary');
});

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
});
