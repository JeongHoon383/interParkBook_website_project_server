import * as FloatingMenuRepository from '../repository/FloatingMenuRepository.js';

export async function getRecentView(req, res) {
  const recentViewArr = req.body;
  const rows = await FloatingMenuRepository.getRecentView(recentViewArr);
  res.json(rows);
}