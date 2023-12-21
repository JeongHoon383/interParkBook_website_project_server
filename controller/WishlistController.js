import * as WishlistRepository from '../repository/WishlistRepository.js';

export async function getWishlist(req, res) {
  const id = req.params.id;
  const rows = await WishlistRepository.getWishlist(id);
  res.json(rows) ;
}

export async function toggleWishlist(req, res) {
  const {id, isbn13} = req.body;
  const result = await WishlistRepository.toggleWishlist({id, isbn13});
  res.json(result);
}

export async function addToWishlistAll(req, res) {
  const wishlistArr = req.body;
  const result = await WishlistRepository.addToWishlistAll(wishlistArr);
  res.json(result);
}