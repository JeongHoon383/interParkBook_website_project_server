import {db} from '../db/database.js';

export async function getRecentView(recentViewArr) {
  const sql = 'select isbn13, title, cover, priceSales from book_all where isbn13 = ?';

  const promises = recentViewArr.map(isbn13 => {
    return db.execute(sql, [isbn13])
    .then(result => result[0][0]);
  });

  const resultArr = await Promise.all(promises);
  return resultArr;
}