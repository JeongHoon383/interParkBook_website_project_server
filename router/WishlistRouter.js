import express from "express";
import * as wishlistContoller from '../controller/WishlistController.js';

const router = express.Router();

router.post('/all', wishlistContoller.addToWishlistAll);

export default router;
