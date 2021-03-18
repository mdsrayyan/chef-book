
export class Recipe {
  title?: string;
  category?: string;
  caption?: string;
  preparationTime?: string;
  cookTime?: string;
  servings?: number;
  description?: string;
  ingredients?: string;
  instructions?: string;
  files?: string;

  constructor(recipe: Recipe) {
    recipe = recipe || {} as Recipe;
    return recipe;
  }
}
