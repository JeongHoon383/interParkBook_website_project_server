import * as WishlistRepository from '../repository/WishlistRepository.js';

export async function addToWishlistAll(req, res) {
  const wishlistArr = req.body;
  const result = await WishlistRepository.addToWishlistAll(wishlistArr);
  console.log(result);
  res.json(result);
}