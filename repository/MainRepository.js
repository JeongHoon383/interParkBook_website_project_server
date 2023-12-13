import { db } from '../db/database.js';

export async function getBook() {
  const sql = 'select cover, title, priceSales,description, isbn13 from book_all;';
  return db.execute(sql).then((result) => result[0]);
}
export async function getNew() {
  const sql =
    "select cover, substring_index(author,'(',1) as author, substring_index(title,'-',1) as title, isbn13 from itemnewall limit 10;";
  return db.execute(sql).then((result) => result[0]);
}

export async function getBestSeller() {
  const sql =
    "select cover, bestRank, substring_index(title,'-',1) as title, isbn13 from bestseller where mallType='BOOK' order by bestRank limit 10;";
  return db.execute(sql).then((result) => result[0]);
}

export async function getFieldAll(searchCategoryId) {
  const sql =
    'select cover, title, priceSales, searchCategoryId, isbn13 from editor_recommend where searchCategoryId=?';
  return db.execute(sql, [searchCategoryId]).then((result) => result[0]);
}

export async function getBlogBest() {
  const sql = 'select cover, title, customerReviewRank, priceStandard, priceSales, isbn13 from blogbest limit 8;';
  return db.execute(sql).then((result) => result[0]);
}

export async function getMusic() {
  const sql = 'select cover, title, priceSales, mileage, isbn13 from music_bestseller limit 9;';
  return db.execute(sql).then((result) => result[0]);
}

export async function getDvd() {
  const sql = 'select cover, title, priceSales, mileage, isbn13 from dvdbestseller limit 9;';
  return db.execute(sql).then((result) => result[0]);
}
