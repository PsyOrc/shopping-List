export interface RecipeModel {
  name: string;
  description: string;
  imagePath: string;
  ingredients: IngredientsModel[];
}

export interface IngredientsModel {
  name: string;
  amount: number;
  price: number | null;
}

