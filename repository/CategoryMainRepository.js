
import {db} from '../db/database.js';

export async function getList(){
  return db
        .execute("select * from book_all")
        .then((rows) => rows[0]);
}

export async function categoryNew(){
  return db
        .execute("select cover, title, author, publisher, priceSales, mileage, description, isbn13 from book_all where pubDate > '2023-10-10' and pubDate < '2023-11-01' limit 4")
        .then((rows) => rows[0]);
}

export async function categorySteady(){
  return db
        .execute("select cover, title, author, publisher, priceSales, mileage, isbn13, categoryDetail from book_all where pubDate > '2021-09-01' and pubDate < '2021-10-07' limit 4")
        .then((rows) => rows[0]);
}

export async function categoryHot(){
  return db
        .execute("select cover, title, author, publisher, priceSales, mileage, isbn13, categoryDetail from book_all where pubDate > '2024-01-05' and pubDate < '2024-01-12' limit 4")
        .then((rows) => rows[0]);
}

export async function categoryLiterature(){
  return db
        .execute("select cover, title, author, priceSales, description, isbn13, categoryName from book_all where categoryName like '%인문학%' limit 8;")
        .then((rows) => rows[0]);
}

export async function categoryEconomy(){
  return db
        .execute("select cover, title, author, priceSales, description, isbn13, categoryName from book_all where categoryName like '%경제경영%' limit 8;")
        .then((rows) => rows[0]);
}

export async function categoryHobby(){
  return db
        .execute("select cover, title, author, priceSales, description, isbn13, categoryName from book_all where categoryName like '%취미%' limit 8;")
        .then((rows) => rows[0]);
}

export async function categoryKid(){
  return db
        .execute("select cover, title, author, priceSales, description, isbn13, categoryName from book_all where categoryName like '%어린이%' limit 8;")
        .then((rows) => rows[0]);
}

export async function categoryForeign(){
  return db
        .execute("select cover, title, author, priceSales, description, isbn13, categoryName from book_all where categoryName like '%외국어%' or categoryName like '%고등학교%' or categoryName like '%청소년%'  limit 12;")
        .then((rows) => rows[0]);
}