import express from "express";
import * as controller from '../controller/SearchConttroller.js';

const router = express.Router();

router.post("/", controller.getSearchBook);

export default router;
