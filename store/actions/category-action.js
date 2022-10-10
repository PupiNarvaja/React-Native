import { categoryTypes } from "../types";

const { SELECT_CATEGORY } = categoryTypes;

export const selectedCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id,
});
