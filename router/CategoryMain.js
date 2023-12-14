import express from 'express';
import * as categoryMainController from '../controller/CategoryMainController.js';

const router = express.Router();

router.get('/', categoryMainController.getList);

export default router;