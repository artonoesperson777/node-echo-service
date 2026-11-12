import { createServer } from "node:http";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Service running.");
});

server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

const port = parseInt(process.env.PORT || "8080");
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
