import { db } from '../db/database.js';

export async function insertMember(id, password, name, email, phone) {
  const sql = 'insert into member(id, password, name, email, phone) value(?,?,?,?,?)';
  return db.execute(sql, [id, password, name, email, phone]).then((result) => 'success');
}

export async function selectMember(id) {
  const sql = 'select count(password) as count, ANY_VALUE(password) as password from member where id = ?';
  return db.execute(sql, [id]).then((result) => result[0][0]);
}

export async function getMemberInfo(id) {// 필요한 데이터 있으면 sql문에 추가하셔도 됩니다.
  const sql = 'select userMileage from member where id = ?'
  return db.execute(sql, [id]).then(result => result[0][0]);
}