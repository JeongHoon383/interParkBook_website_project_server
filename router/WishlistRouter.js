import express from "express";
import * as WishlistContoller from '../controller/WishlistController.js';

const router = express.Router();

router.get('/:id', WishlistContoller.getWishlist);
router.post('/', WishlistContoller.toggleWishlist);
router.post('/all', WishlistContoller.addToWishlistAll);

export default router;
