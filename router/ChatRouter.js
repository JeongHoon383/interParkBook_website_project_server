import express from "express";

const ChatRouter = (io) => {
  const router = express.Router();
  io.on("connection", (socket) => {
   /*  console.log("누가 웹소켓 연결함"); */
    socket.on("disconnect", () => {
   /*    console.log("User disconnected"); */
    });
    socket.on("message", async (data) => {
      console.log(data);
      if (data.msg) {
        io.to("1").emit("broadcast", {
          id:data.id,
          time: data.time,
          msg: data.msg,
        });
      }
    });
    socket.on("ask-join", async (data) => {
      socket.join(data);
    });
  });
  return router;
};
export default ChatRouter;
