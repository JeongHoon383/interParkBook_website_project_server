import * as CategoryListRepository from "../repository/CategoryListRepository.js";

export async function getMall(req, res) {
  const rows = await CategoryListRepository.getMall();
  res.json(rows);
}

export async function getFirstCategory(req, res) {
  const { mall } = req.params;
  const rows = await CategoryListRepository.getFirstCategory({ mall });
  res.json(rows);
}

export async function getSecondDCategory(req, res) {
  const { mall, firstD } = req.params;
  const rows = await CategoryListRepository.getSecondDCategory({mall, firstD});
  res.json(rows);
}

export async function getThirdDCategory(req, res) {
  const { mall, firstD, secondD } = req.params;
  const rows = await CategoryListRepository.getThirdDCategory({mall, firstD, secondD});
  res.json(rows);
}

export async function getFourthDCategory(req, res) {
  const { mall, firstD, secondD, thirdD } = req.params;
  const rows = await CategoryListRepository.getFourthDCategory({mall, firstD, secondD, thirdD,});
  res.json(rows);
}

export async function getFifthDCategory(req, res) {
  const { mall, firstD, secondD, thirdD, fourthD } = req.params;
  const rows = await CategoryListRepository.getFifthDCategory({mall, firstD, secondD, thirdD, fourthD});
  res.json(rows);
}

export async function getBookData(req, res) {
  const {
    mall,
    firstD,
    secondD,
    thirdD,
    fourthD,
    startIndex,
    endIndex,
    sorting
  } = req.params;
  const rows = await CategoryListRepository.getBookData({
    mall,
    firstD,
    secondD,
    thirdD,
    fourthD,
    startIndex,
    endIndex,
    sorting
  });
  res.json(rows);
}
