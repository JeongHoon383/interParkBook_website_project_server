import express from "express";
import * as CategoryListController from "../controller/CategoryListController.js";

const router = express.Router();

router.get("/mall", CategoryListController.getMall);
router.get("/:mall", CategoryListController.getFirstCategory);
router.get("/:mall/:firstD", CategoryListController.getSecondDCategory);
router.get("/:mall/:firstD/:secondD", CategoryListController.getThirdDCategory);
router.get("/:mall/:firstD/:secondD/:thirdD", CategoryListController.getFourthDCategory);
router.get("/:mall/:firstD/:secondD/:thirdD/:fourthD", CategoryListController.getFifthDCategory);
router.get("/:mall/:firstD/:secondD/:thirdD/:fourthD/:fifthD/:startIndex/:endIndex/:sortField/:sortOption/:isSoldout", CategoryListController.getBookData);
router.get("/:mall/:firstD/:secondD/:thirdD/:fourthD/:fifthD", CategoryListController.getCategoryId);

export default router;
