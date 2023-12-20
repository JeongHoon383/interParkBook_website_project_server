import * as categoryMainRepository from '../repository/CategoryMainRepository.js';

export async function getList(req, res){
  const rows = await categoryMainRepository.getList();
  console.log(rows);
  res.json(rows);
}

export async function categoryNew(req, res){
  const rows = await categoryMainRepository.categoryNew();
  console.log(rows);
  res.json(rows);
}

export async function categorySteady(req, res){
  const rows = await categoryMainRepository.categorySteady();
  console.log(rows);
  res.json(rows);
}

export async function categoryHot(req, res){
  const rows = await categoryMainRepository.categoryHot();
  console.log(rows);
  res.json(rows);
}

export async function categoryLiterature(req, res){
  const rows = await categoryMainRepository.categoryLiterature();
  console.log(rows);
  res.json(rows);
}

export async function categoryEconomy(req, res){
  const rows = await categoryMainRepository.categoryEconomy();
  console.log(rows);
  res.json(rows);
}

export async function categoryHobby(req, res){
  const rows = await categoryMainRepository.categoryHobby();
  console.log(rows);
  res.json(rows);
}

export async function categoryKid(req, res){
  const rows = await categoryMainRepository.categoryKid();
  console.log(rows);
  res.json(rows);
}

export async function categoryForeign(req, res){
  const rows = await categoryMainRepository.categoryForeign();
  console.log(rows);
  res.json(rows);
}