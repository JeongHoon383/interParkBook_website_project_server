import express from 'express';
import * as controller from '../controller/MainController.js';

const router = express.Router();

router.get('/new', controller.getNew);
router.get('/best', controller.getBestSeller);
router.get('/field/:searchCategoryId', controller.getFieldAll);
router.get('/blogbest', controller.getBlogBest);
router.get('/music', controller.getMusic);
router.get('/dvd', controller.getDvd);

export default router;
