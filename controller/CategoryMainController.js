import * as categoryMainRepository from '../repository/CategoryMainRepository.js';

export async function getList(req, res){
  const rows = await categoryMainRepository.getList();
  console.log(rows);
  res.json(rows);
}

export async function categoryMainNewBook(req, res){
  const rows = await categoryMainRepository.categoryMainNewBook();
  console.log(rows);
  res.json(rows);
}
