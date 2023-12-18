import * as repository from '../repository/MainRepository.js';

export async function getBook(req, res) {
  const result = await repository.getBook();
  res.json(result);
}
export async function getNew(req, res) {
  const result = await repository.getNew();
  res.json(result);
}

export async function getBestSeller(req, res) {
  const result = await repository.getBestSeller();
  res.json(result);
}

export async function getFieldAll(req, res) {
  const searchCategoryId = req.params.searchCategoryId;
  const result = await repository.getFieldAll(searchCategoryId);
  res.json(result);
}

export async function getBlogBest(req, res) {
  const result = await repository.getBlogBest();
  res.json(result);
}

export async function getMusic(req, res) {
  const result = await repository.getMusic();
  res.json(result);
}

export async function getDvd(req, res) {
  const result = await repository.getDvd();
  res.json(result);
}
