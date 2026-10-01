const http = require("node:http");

const port = Number(process.env.PORT || 8080);
const host = "0.0.0.0";

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.url === "/health") {
    response.writeHead(200);
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  if (request.url === "/") {
    response.writeHead(200);
    response.end(JSON.stringify({ message: "Hello, world!" }));
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, host, () => {
  console.log(`Hello world server listening on http://${host}:${port}`);
});
