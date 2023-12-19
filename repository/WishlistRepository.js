import { db } from "../db/database.js";

export async function addToWishlistAll(wishlistArr) {
  const insertPromises = wishlistArr.map(async (wishlistData) => {
    const { id, isbn13 } = wishlistData;

    const checkDuplicateSql = `select id, isbn13 from wishlist where id = ? and isbn13 = ?`
    const [duplicatedResult] = await db.execute(checkDuplicateSql, [id, isbn13]);

    if(!duplicatedResult.length) {
      const insertSql = `insert into wishlist (id, isbn13) values (?, ?)`;
      return db.execute(insertSql, [id, isbn13]);
    }
  });


  return Promise.all(insertPromises).then(result => '찜하기 완료');
}