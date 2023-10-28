// Define the generateNewId function in a separate TypeScript file
import { Category } from "../types/categories.js";

export function generateNewId(categories: Category[]): number {
  const ids: number[] = categories.map((category) => category.id);
  const maxId: number = Math.max(...ids);
  return maxId + 1;
}
