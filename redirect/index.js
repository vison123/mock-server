/**
 * Created by vison on 10/28/16.
 */


var request = require('request');

var config = require('../config');

function getData(url, param, callback, headers) {
  // console.log(headers);
  // if (url.indexOf('Pub') < 0 && url.indexOf('Api') < 0) {
  //   url = '/Api' + url;
  // }
  // console.log(url);
  var tag = '';
  // if (url.indexOf('getMenus') !== -1){
  //   tag = '/Leasing'
  // }
  var options = {
    uri: "http://" + config.host + ":" + config.port + tag + url,
    method: 'POST',
    headers: headers,
    json: param
  };
  console.log(options.uri);
  request(options, function (error, response, body) {
    console.log(body);
    callback(body);
  });
}

module.exports = getData;

