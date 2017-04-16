export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public recipeAuthor: string,
    public servingsNumber: string,
    public recipeUrl: string,
    public ingredients: string[],
    public instructions: object[],
    public imageUrl: string
  ){}
}
