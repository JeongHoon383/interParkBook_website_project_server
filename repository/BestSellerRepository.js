import { db } from "../db/database.js";

export async function getBestSellerBookList(
  navbar,
  categoryName,
  startindex,
  endindex
) {
  let sql = ``;

  if (navbar === "all") {
    sql = `select * from book_all order by salesPoint desc limit 15;`;
  } else {
    sql = `
		SELECT 
		num, 
		total_rows,
		title, link, author, pubDate, description, isbn, 
		isbn13, ItemId, priceSales, 
		priceStandard, mallType, stockStatus, mileage, cover, categoryId, categoryName, 
		publisher, salesPoint, adult, fixedPrice, customerReviewRank, bestRank, subInfo
		from (select row_number() over (order by salesPoint desc)
		as num, 
		(SELECT COUNT(*) AS total_count 
			FROM book_all 
			WHERE pubDate 
			BETWEEN DATE_ADD(NOW(), INTERVAL -1 ${navbar}) AND NOW()
			AND categoryName LIKE ?) 
		as total_rows,
		title, link, author, pubDate, description, isbn, 
		isbn13, ItemId, priceSales, 
		priceStandard, mallType, stockStatus, mileage, cover, categoryId, categoryName, 
		publisher, salesPoint, adult, fixedPrice, customerReviewRank, bestRank, subInfo
		FROM book_all where pubDate between date_add(NOW(), INTERVAL -1 ${navbar} ) AND NOW()
		and categoryName like ?) as booklist
		where num between ? and ?;`;
  }

  let cate = "";

  if (categoryName === "total") {
    cate = `%%`;
  } else {
    cate = `%${categoryName}%`;
  }

  return db
    .execute(sql, [cate, cate, startindex, endindex])
    .then((rows) => rows[0]);
}
