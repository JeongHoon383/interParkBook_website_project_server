import express from 'express';
import * as FloatingMenuController from '../controller/FloatingMenuController.js';

const router = express.Router();

router.get('/:recentViewData', FloatingMenuController.getRecentView);

export default router;
