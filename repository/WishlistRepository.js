import { db } from "../db/database.js";

export async function getWishlist(id){
  const sql = 'select id, isbn13 from wishlist where id = ?';
  return db.execute(sql, [id]).then(result => result[0]);
}

export async function toggleWishlist({id, isbn13}) {
  const checkDuplicateSql = `select count(*) as cnt from wishlist where id= ? and isbn13 = ?`;
  let dulpicateResult = await db.execute(checkDuplicateSql, [id, isbn13]);
  dulpicateResult = dulpicateResult[0][0].cnt;
  
  if(dulpicateResult === 1) {
    const deleteSql = `delete from wishlist where id = ? and isbn13 = ?`;
    return db.execute(deleteSql, [id, isbn13]).then(result => '찜삭제 완료');
  }else{
    const addSql = `insert into wishlist (id, isbn13) values (?, ?)`;
    return db.execute(addSql, [id, isbn13]).then(result => '찜하기 완료');
  }
  

  // return db.execute(sql, [id, isbn13]).then(result => '찜하기 완료');

}

export async function addToWishlistAll(wishlistArr) {
  const currentWishlistSql = 'select isbn13 from wishlist where id = ?';
  let currentWishlistData = await db.execute(currentWishlistSql, [wishlistArr[0].id]);
  const currentWishlistArr = currentWishlistData[0];

  const areWishlistExist = (wishlistArr, currentWishlistArr) => {
    return wishlistArr.every(item => currentWishlistArr.some(cItem => item.isbn13 === cItem.isbn13));
  };

  if(areWishlistExist(wishlistArr, currentWishlistArr)) {
    return '이미 찜한 상품'
  }else{
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
}