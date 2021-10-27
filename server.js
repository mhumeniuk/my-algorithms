var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var logger = require('morgan');
var watch = require('node-watch');
var ncp = require('ncp').ncp;

const app = express();

const localDirname = '/public';
const staticDirname = '/static';
const sourceDirname = '/src';

//TODO: move to config, use nodemon
const publicDir = path.join(__dirname, localDirname);
const srcDir = path.join(__dirname, sourceDirname);
const staticDir = path.join(publicDir, staticDirname);
console.log(staticDir);

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'))
});

app.use(express.static(path.resolve(publicDir, './static')));

reload(app).then(function (reloadReturned) {
  startServer();
}).catch(function (err) {
  console.error('Reload could not start, could not start the app', err)
});

//watch for changes copy code, restart server
watch(srcDir, { recursive: true }, function (f, curr, prev) {
  console.log('source code, restarting server...');
  ncp(srcDir, staticDir, function (err) {
    if (err) {
      return console.error(err);
    }
    server.close(function() {
      console.log('starting') 
      startServer();
    });
  });
});

function startServer() {
  server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
  });
}


var server = http.createServer(app);