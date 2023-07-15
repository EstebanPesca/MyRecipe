// Exporting a data's structure for the recipes

export interface CatalogData{
  name:string, image:string, description:string, recipe:string, ingredients: string[]
}

// Exporting the recipe's name and the previous path

export interface pathOrigin{
  name:string, path: string
}
