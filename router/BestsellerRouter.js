import express from "express";
import * as controller from "../controller/BestSellerConttroller.js";

const router = express.Router();

router.get(
  "/:navbar/:categoryName/:page/:itemsCountPerPage",
  controller.getBestSellerBookList
);

export default router;
