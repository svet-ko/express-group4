import express from "express";
import {
  createOneCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoriesController.js";

const router = express.Router();

// Get all categories
router.get("/categories", getAllCategory);

// Get a category by ID
router.get("/categories/:categoryId", getOneCategory);

// Create a new category
router.post("/categories", createOneCategory);

// Update a category
router.put("/categories/:categoryId", updateCategory);

// Delete a category
router.delete("/categories/:categoryId", deleteCategory);

export default router;
