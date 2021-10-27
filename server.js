import express from "express";
import http from "http";
import path from "path";
import reload from "reload";
import morgan from "morgan";
import watch from "node-watch";
import ncp from "ncp";

const __dirname = path.resolve();
const logger = morgan;

const app = express();

const localDirname = '/public';
const staticDirname = '/static';
const sourceDirname = '/src';

//TODO: move to config
const publicDir = path.join(__dirname, localDirname);
const srcDir = path.join(__dirname, sourceDirname);
const staticDir = path.join(publicDir, staticDirname);

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

//todo: make build code and copy bundle instead of files
watch(srcDir, { recursive: true }, function (f, curr, prev) {
  console.log('copying source code...');
  ncp.ncp(srcDir, staticDir, function (err) {
    if (err) {
      return console.error(err);
    }
  });
});

function startServer() {
  server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
  });
}

var server = http.createServer(app);