interface ICredentials {
  email: string;
  password: string;
}

interface IUserInfo {
  id: number;
  email: string;
  token: string;
}

interface IRecipe {
  id: number;
  name: string;
  recipeAuthor: string;
  servingsNumber: string;
  recipeUrl: string;
  ingredients: string[];
  instructions: object[];
  imageUrl: string;
}
