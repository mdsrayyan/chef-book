
export class Recipe {
  id?:number;
  title?: string;
  category?: string;
  caption?: string;
  preparationTime?: string;
  cookTime?: string;
  servings?: number;
  description?: string;
  ingredients?: string;
  instructions?: string;
  isFavourite?:boolean;
  files?: string;
  filePath?: string;

  constructor(recipe: Recipe) {
    recipe = recipe || {} as Recipe;
    return recipe;
  }
}
