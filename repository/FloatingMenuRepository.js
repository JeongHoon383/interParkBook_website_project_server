import {db} from '../db/database.js';

export async function getRecentView([recentViewData]) {
  const sql = 'select * isbn13, title, cover, priceSales from book_all where isbn13 =?';

  

}