import { db } from '../db/database.js';

export async function getMall(){
  const sql = 'select distinct mall from category';
  return db
  .execute(sql)
  .then(result => result[0])
}

export async function getFirstCategory({mall}){
  const sql = 'select distinct firstD as categoryName, mall, firstD from category where mall= ? order by firstD';
  return db
  .execute(sql, [mall])
  .then(result => result[0])
}

export async function getSecondDCategory( { mall, firstD }){
  const sql = 'select distinct secondD as categoryName, mall, firstD, secondD from category where mall = ? and firstD = ? and secondD is not null order by secondD';
  return db
  .execute(sql, [mall, firstD])
  .then(result => result[0])
}

export async function getThirdDCategory( { mall, firstD, secondD }){
  const sql = 'select distinct thirdD as categoryName, mall, firstD, secondD, thirdD from category where mall = ? and firstD = ? and secondD = ? and thirdD is not null order by thirdD';
  return db
  .execute(sql, [mall, firstD, secondD])
  .then(result => result[0])
}

export async function getFourthDCategory( { mall, firstD, secondD, thirdD }){
  const sql = 'select distinct fourthD as categoryName, mall, firstD, secondD, thirdD, fourthD from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and fourthD is not null order by fourthD';
  return db
  .execute(sql, [mall, firstD, secondD, thirdD])
  .then(result => result[0])
}

export async function getFifthDCategory( { mall, firstD, secondD, thirdD, fourthD }){
  let parameter = [mall, firstD, secondD, thirdD, fourthD];
  let sql = 'select distinct fifthD as categoryName, mall, firstD, secondD, thirdD, fourthD, fifthD from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and fourthD = ? and fifthD is not null order by fifthD';

  if(secondD === 'undefined'){
    sql = 'select distinct secondD as categoryName, mall, firstD, secondD from category where mall = ? and firstD = ? and secondD is not null order by secondD';
    parameter = [mall, firstD];
  } else if (thirdD === 'undefined') {
    sql = 'select distinct thirdD as categoryName, mall, firstD, secondD, thirdD from category where mall = ? and firstD = ? and secondD = ? and thirdD is not null order by thirdD';
    parameter = [mall, firstD, secondD];
  } else if (fourthD === 'undefined') {
    sql = 'select distinct fourthD as categoryName, mall, firstD, secondD, thirdD, fourthD from category where mall = ? and firstD = ? and secondD = ? and thirdD = ? and fourthD is not null order by fourthD';
    parameter = [mall, firstD, secondD, thirdD];
  }

  return db
  .execute(sql, parameter)
  .then(result => result[0])
}
