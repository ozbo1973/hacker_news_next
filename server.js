const next = require("next");
const http = require("http");
const url = require("url");
const path = require("path");

const PORT = process.env.port || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // parse url to get path
      const parsedurl = url.parse(req.url, true);
      const { pathname } = parsedurl;

      if (pathname === "/service-worker.js") {
        const filepath = path.join(__dirname, ".next", pathname);
        app.serveStatic(req, res, filepath);
      } else {
        handle(req, res, parsedurl);
      }
    })
    .listen(PORT, () => {
      console.log(`listening on port: ${PORT}`);
    });
});
