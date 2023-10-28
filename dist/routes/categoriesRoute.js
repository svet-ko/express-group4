import express from "express";
import { createOneCategory, getAllCategory, getOneCategory, updateCategory, deleteCategory, } from "../controllers/categoriesController.js";
const router = express.Router();
// Get all categories
router.get("/", getAllCategory);
// Get a category by ID
router.get("/:id", getOneCategory);
// Create a new category
router.post("/", createOneCategory);
// Update a category
router.put("/:id", updateCategory);
// Delete a category
router.delete("/:id", deleteCategory);
export default router;
