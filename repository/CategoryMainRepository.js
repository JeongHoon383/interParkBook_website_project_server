
import {db} from '../db/database.js';

export async function getList(){
  return db
        .execute("select * from book_all")
        .then((rows) => rows[0]);
}

export async function categoryMainNewBook(){
  return db
        .execute("select cover, title, author, publisher, priceSales, mileage, description from book_all where pubDate > '2023-10-10' and pubDate < '2023-11-01' limit 4")
        .then((rows) => rows[0]);
}