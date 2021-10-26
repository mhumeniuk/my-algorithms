var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var logger = require('morgan');
var watch = require('node-watch');

const app = express();

const localDirname = './'; //'/public';

//move to config
const publicDir = path.join(__dirname, localDirname);
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'))
});

app.use(express.static(path.resolve(publicDir, './src')));

reload(app).then(function (reloadReturned) {
  // Reload started, start web server
  server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
  })
}).catch(function (err) {
  console.error('Reload could not start, could not start the app', err)
})

var server = http.createServer(app);