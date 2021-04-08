const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = 4000;

const rooms = [];

server.listen(PORT, () => {
    console.log(`server on ${PORT}`);
});

io.on("connection", (socket) => {
    socket.on("connection", () => {
        console.log("connect");
    });

    socket.on("create/room", (title) => {
        rooms.push(title);
    });

    socket.on("join/room", (title) => {
        socket.join(rooms[0], () => {
            io.to(rooms[0]).emit("join");
        });
    });

    socket.on("leave/room", (title) => {
        socket.leave(rooms[0], () => {
            io.to(rooms[0]).emit("leave");
        });
    });

    socket.on("create/message", (roomId, message) => {});

    socket.on("create", () => {});

    socket.on("draw", (ps) => {
        console.log(ps.x, ps.y);

        socket.broadcast.emit("show", { x: ps.x, y: ps.y });
    });

    socket.on("out", () => {
        socket.broadcast.emit("cursor/out");
    });

    socket.on("clear", () => {
        socket.broadcast.emit("canvas/clear");
    });

    socket.on("change/color", (color) => {
        socket.broadcast.emit("canvas/change/color", color);
    });

    socket.on("change/weight", (weight) => {
        socket.broadcast.emit("canvas/change/weight", weight);
    });

    socket.on("change/bgColor", (color) => {
        socket.broadcast.emit("canvas/change/bgColor", color);
    });
});
