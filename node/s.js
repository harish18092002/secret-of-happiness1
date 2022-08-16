import http from "http";
import url from "url";


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const path = req.url;

  const parts = path.split('/').slice(1);

  // This is really brittle, but assuming you know it's going to be 2 parts remaining after the above..

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(parts[1]);
  console.log(path)
  console.log(parts)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});