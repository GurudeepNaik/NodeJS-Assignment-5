var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url == "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/json" });
    const responseData = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com",
    };
    const jsonData = JSON.stringify(responseData);
    res.end(jsonData);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
}
httpServer.listen(8081, () => {
  console.log("Severed @ Portal 8081");
});
module.exports = httpServer;
