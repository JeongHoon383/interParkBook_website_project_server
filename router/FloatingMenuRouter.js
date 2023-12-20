import express from 'express';
import * as FloatingMenuController from '../controller/FloatingMenuController.js';

const router = express.Router();

router.post('/', FloatingMenuController.getRecentView);

export default router;
