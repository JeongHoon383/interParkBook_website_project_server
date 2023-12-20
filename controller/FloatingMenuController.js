import * as FloatingMenuRepository from '../repository/FloatingMenuRepository.js';

export async function getRecentView(req, res) {
  // const {recentViewData} = req.params;
  const rows = await FloatingMenuRepository.getRecentView([recentViewData]);
}