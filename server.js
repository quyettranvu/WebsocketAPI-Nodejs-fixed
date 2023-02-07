import express from "express";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";

//Webserver configuration
const app = express();
const server = http.createServer(app);

const wss = new WebSocketServer({ server: server }); //alternatively we can use option port

wss.on("connection", function connection(ws) {
  console.log("New client connected!");
  ws.send("Welcome New Client");

  //Everytime server received a message
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);

    //client will send message to general server where other people also can see it
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  //ws.send("Welcome to the websocket server!Enjoy your time here!");
});

//Our application's configuration
app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(3000, () => {
  console.log("Listening on port : 3000");
});
