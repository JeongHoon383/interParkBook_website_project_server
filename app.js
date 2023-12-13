import express, { urlencoded } from 'express';
import cors from 'cors';
import BestsellerRouter from './router/BestsellerRouter.js';
import CartRouter from './router/CartRouter.js';
import DetailRouter from './router/DetailRouter.js';
import MainRouter from './router/MainRouter.js';
import SearchRouter from './router/SearchRouter.js';
import MemberRouter from './router/MemberRouter.js';
import LoginRouter from './router/LoginRouter.js';

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// app.use('/bestseller', BestsellerRouter);
// app.use('/cart', CartRouter);
 app.use('/book', DetailRouter);
app.use('/', MainRouter);
// app.use('/search', SearchRouter);
app.use('/member', MemberRouter);
app.use('/login', LoginRouter);
// app.use('/category/list');
// app.use('/category/main');

app.listen(9090, () => {
  console.log(`http://localhost:9090 인터파크서버실행중`);
});
