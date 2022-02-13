const http = require("http");
const server = http.createServer();
const { Server } = require("socket.io");
const io = new Server(server,
  {
    cors: {
      origin: "http://localhost:8080",
    }
  }
);

io.on('connection', (socket) => {
  console.log(`a user ${socket.id} connected`);
  socket.on('disconnect', () => {
    console.log(socket.id + " disconnected");
  });
  
  socket.on("click table cell", (i, j) => {
    socket.emit("click result", `你点击了第${i}行第${j}列的单元格`);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});