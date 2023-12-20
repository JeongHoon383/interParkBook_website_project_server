import express from 'express';
import * as categoryMainController from '../controller/CategoryMainController.js';

const router = express.Router();

router.get('/', categoryMainController.getList);
router.get('/categoryNew', categoryMainController.categoryNew)
router.get('/categorySteady', categoryMainController.categorySteady)
router.get('/categoryHot', categoryMainController.categoryHot)
router.get('/categoryLiterature', categoryMainController.categoryLiterature)
router.get('/categoryEconomy', categoryMainController.categoryEconomy)
router.get('/categoryHobby', categoryMainController.categoryHobby)
router.get('/categoryKid', categoryMainController.categoryKid)
router.get('/categoryForeign', categoryMainController.categoryForeign)


export default router;