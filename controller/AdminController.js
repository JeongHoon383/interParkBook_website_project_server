import * as AdminRepository from "../repository/AdminRepository.js";

export async function getUserInfo(req, res) {
  const result = await AdminRepository.getUserInfo();
  res.json(result);
}

export async function InsertBook(req, res) {
  let {
    title,
    author,
    pubDate,
    description,
    isbn13,
    priceSales,
    priceStandard,
    mallType,
    stockStatus,
    mileage,
    cover,
    categoryId,
    categoryName,
    publisher,
    salesPoint,
  } = req.body;
  const result = await AdminRepository.InsertBook(
    title,
    author,
    pubDate,
    description,
    isbn13,
    priceSales,
    priceStandard,
    mallType,
    stockStatus,
    mileage,
    cover,
    categoryId,
    categoryName,
    publisher,
    salesPoint
  );
  if (result === "ok") {
    console.log("신규서적 등록완료");
    res.json(result);
  }
}

export async function DeleteBook(req, res) {
  let { isbn13 } = req.body;
  const result = await AdminRepository.DeleteBook(isbn13);
  if(result === 'ok'){
    console.log('도서삭제완료');
    res.json(result)
  }
}
