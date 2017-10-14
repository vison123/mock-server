var express = require('express');
var bodyParder = require('body-parser');

var Redirect = require('./redirect');

var app = express();

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,Accept,X-Requested-With,MX-MainMenuId,MX-ProcessSubMenuId');
  next();
}
app.use(bodyParder.json());
app.use(allowCrossDomain);
app.use(express.static('./static'));

function getUrlPath(url) {
  return url;
}

app.post(getUrlPath('/api/system/business/login'), function (req, res) {
var mockData = require('./json/login.json');
res.json(mockData);
})


app.post('/*', function (req, res) {
  console.log('#########', req.url);
  var header = req.headers || {};
  Redirect(req.url, req.body, function (chunk) {
    res.json(chunk);
  }, header);
});

var server = app.listen(3003, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

