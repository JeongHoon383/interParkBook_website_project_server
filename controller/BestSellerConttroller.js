
// import * as list from '../router/data.js';
import * as repository from '../repository/BestSellerRepository.js';


export async function getBestSellerBookList(req, res) {
	const { navbar, categoryName, page, itemsCountPerPage } = req.params;
	console.log(navbar, categoryName, page, itemsCountPerPage);
	const endindex = itemsCountPerPage * page;
	const startindex = endindex - 14;
	const rows = await repository.getBestSellerBookList(navbar, categoryName, startindex, endindex);
	res.json(rows);
}