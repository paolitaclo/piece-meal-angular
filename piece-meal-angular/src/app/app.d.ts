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
  ingredients: IIngredient[];
  instructions: string;
}

interface IIngredient {
  id: number;
  name: string;
  active: boolean;
  tags: string[];
}
