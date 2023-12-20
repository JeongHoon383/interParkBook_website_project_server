import { db } from "../db/database.js";

export async function getUserInfo() {
  const sql = `SELECT id,name,phone,email FROM member`;
  return db.execute(sql, []).then((row) => row[0]);
}

export async function InsertBook(
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
) {
  const sql = `INSERT INTO book_all(title,author,pubDate,description,isbn13,priceSales,priceStandard,mallType,stockStatus,mileage,cover,categoryId,categoryName,publisher,salesPoint)
  value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  return db
    .execute(sql, [
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
    ])
    .then((result) => result === "ok");
}

export async function DeleteBook(isbn13) {
  const sql = `DELETE FROM book_all WHERE isbn13 = ?`;
  return db.execute(sql, [isbn13]).then((result) => "ok");
}
