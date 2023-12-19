import { db } from '../db/database.js';

export async function getMall() {
  const sql = 'select distinct mall from category';
  return db.execute(sql).then((result) => result[0]);
}

export async function getFirstCategory({ mall }) {
  const sql =
    'select distinct firstD as categoryName, mall, firstD from category where mall= ? order by firstD';
  return db.execute(sql, [mall]).then((result) => result[0]);
}

export async function getSecondDCategory({ mall, firstD }) {
  const sql =
    'select distinct secondD as categoryName, mall, firstD, secondD from category where mall = ? and firstD = ? and secondD is not null order by secondD';
  return db.execute(sql, [mall, firstD]).then((result) => result[0]);
}

export async function getThirdDCategory({ mall, firstD, secondD }) {
  const sql =
    'select distinct thirdD as categoryName, mall, firstD, secondD, thirdD from category where mall = ? and firstD = ? and secondD = ? and thirdD is not null order by thirdD';
  return db.execute(sql, [mall, firstD, secondD]).then((result) => result[0]);
}

export async function getFourthDCategory({ mall, firstD, secondD, thirdD }) {
  const sql =
    'select distinct fourthD as categoryName, mall, firstD, secondD, thirdD, fourthD from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and fourthD is not null order by fourthD';
  return db
    .execute(sql, [mall, firstD, secondD, thirdD])
    .then((result) => result[0]);
}

export async function getFifthDCategory({
  mall,
  firstD,
  secondD,
  thirdD,
  fourthD,
}) {
  let parameter = [mall, firstD, secondD, thirdD, fourthD];
  let sql =
    'select distinct fifthD as categoryName, mall, firstD, secondD, thirdD, fourthD, fifthD from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and fourthD = ? and fifthD is not null order by fifthD';

  if (secondD === 'undefined') {
    sql =
      'select distinct secondD as categoryName, mall, firstD, secondD from category where mall = ? and firstD = ? and secondD is not null order by secondD';
    parameter = [mall, firstD];
  } else if (thirdD === 'undefined') {
    sql =
      'select distinct thirdD as categoryName, mall, firstD, secondD, thirdD from category where mall = ? and firstD = ? and secondD = ? and thirdD is not null order by thirdD';
    parameter = [mall, firstD, secondD];
  } else if (fourthD === 'undefined') {
    sql =
      'select distinct fourthD as categoryName, mall, firstD, secondD, thirdD, fourthD from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and fourthD is not null order by fourthD';
    parameter = [mall, firstD, secondD, thirdD];
  }

  return db.execute(sql, parameter).then((result) => result[0]);
}

export async function getBookData({
  mall,
  firstD,
  secondD,
  thirdD,
  fourthD,
  fifthD,
  startIndex,
  endIndex,
  sortField,
  sortOption,
  isSoldout,
}) {
  isSoldout = '%' + isSoldout;
  let categoryName = `${mall}>${firstD}${
    secondD !== 'undefined' ? '>' + secondD : ''
  }${thirdD !== 'undefined' ? '>' + thirdD : ''}${
    fourthD !== 'undefined' ? '>' + fourthD : ''
  }${fifthD !== 'undefined' ? '>' + fifthD : ''}%`;

  let sql = `select
	categoryName, priceSales, totalResults, rno, title, author, pubDate, stockStatus, description, isbn13, priceStandard, mallType, stockStatus, mileage, cover, publisher, salesPoint, customerReviewRank
from
	(select
		categoryName, priceSales, row_number() over(order by ${sortField} ${sortOption}) as rno, totalResults, title, author, pubDate, description, isbn13, priceStandard, mallType, stockStatus, mileage, cover, publisher, salesPoint, customerReviewRank
	from
		book_all,
        (select count(*) as totalResults from book_all where categoryName like ?) book_totalResults
	where 
		categoryName like ? and stockStatus not like ?) bookList
	where rno between ? and ?`;

  return db
    .execute(sql, [categoryName, categoryName, isSoldout, startIndex, endIndex])
    .then((result) => result[0]);
}

export async function getCategoryId({
  mall,
  firstD,
  secondD,
  thirdD,
  fourthD,
  fifthD,
}) {
  let sql = 'select categoryId, categoryName from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and fourthD = ? and fifthD = ?';
  let parameter = [mall, firstD, secondD, thirdD, fourthD, fourthD, fifthD];

  if (secondD === 'undefined') {
    sql = 'select categoryId, categoryName from category where mall = ? and firstD = ? and categoryName = ?';
    parameter = [mall, firstD, firstD];
  }else if (thirdD === 'undefined') {
    sql = 'select categoryId, categoryName from category where mall = ? and firstD = ? and secondD = ? and categoryName = ?';
    parameter = [mall, firstD, secondD, secondD];
  }else if (fourthD === 'undefined') {
    sql = 'select categoryId, categoryName from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and categoryName = ?';
    parameter = [mall, firstD, secondD, thirdD, thirdD];
  }else if(fifthD === 'undefined'){
    sql = 'select categoryId, categoryName from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and fourthD = ? and categoryName = ?';
    parameter = [mall, firstD, secondD, thirdD, fourthD, fourthD];
  }

  return db
    .execute(sql, parameter)
    .then((result) => result[0][0]);
}
