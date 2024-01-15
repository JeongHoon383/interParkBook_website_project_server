import express, { urlencoded } from "express";
import cors from "cors";
import BestsellerRouter from "./router/BestsellerRouter.js";
import CartRouter from "./router/CartRouter.js";
import DetailRouter from "./router/DetailRouter.js";
import MainRouter from "./router/MainRouter.js";
import SearchRouter from "./router/SearchRouter.js";
import MemberRouter from "./router/MemberRouter.js";
import LoginRouter from "./router/LoginRouter.js";
import CategoryListRouter from "./router/CategoryListRouter.js";
import CategoryMainRouter from "./router/CategoryMain.js";
import WishlistRouter from "./router/WishlistRouter.js";
import FloatingMenuRouter from "./router/FloatingMenuRouter.js";
import AdminRouter from "./router/AdminRouter.js";

import { createServer } from "http";
import { Server } from "socket.io";
import ChatRouter from "./router/ChatRouter.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:3000",
    methods: ["GET", "POST"],
  },
});
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/", ChatRouter(io));
// app.use('/bestseller', BestsellerRouter);
// app.use('/cart', CartRouter);
app.use("/book", DetailRouter);
app.use("/", MainRouter);
// app.use('/search', SearchRouter);
app.use("/member", MemberRouter);
app.use("/login", LoginRouter);
app.use("/category/list", CategoryListRouter);
app.use("/category/main", CategoryMainRouter);
app.use("/wishlist", WishlistRouter);
app.use("/floatingMenu", FloatingMenuRouter);
app.use("/admin", AdminRouter);
app.use("/search", SearchRouter);
app.use("/bestseller", BestsellerRouter);

server.listen(9090, () => {
  console.log(`http://127.0.0.1:9090 인터파크서버실행중`);
});
