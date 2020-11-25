const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});

io.on("connection", (socket) => {
  socket.on("connection", () => {
    socket.join("hello");
    console.log("asd");
  });

  socket.on("draw", (ps) => {
    console.log(ps.x, ps.y);

    socket.broadcast.emit("show", { x: ps.x, y: ps.y });
  });

  socket.on("out", () => {
    socket.broadcast.emit("cursorOut");
  });

  socket.on("clear", () => {
    socket.broadcast.emit("canvasClear");
  });
});
