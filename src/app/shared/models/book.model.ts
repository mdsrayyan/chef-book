export class Recipe {
  id?: string;
  title?: string;
  category?: string;
  caption?: string;
  preparationTime?: string;
  cookTime?: string;
  servings?: number;
  description?: string;
  ingredients?: string;
  instructions?: string;
  isFavourite?: boolean;
  files?: string;
  addedDate?: string;
  modifiedDate?: string;
  filePath?: string;

  constructor(recipe: Recipe) {
    recipe = recipe || {} as Recipe;
    return recipe;
  }
}


export class About {
  welcomeNote?: string;
  shortInto?: string;
  title?: string;
  description?: string;
  profilePath?: string;

  constructor(recipe: Recipe) {
    recipe = recipe || {} as Recipe;
    return recipe;
  }
}
