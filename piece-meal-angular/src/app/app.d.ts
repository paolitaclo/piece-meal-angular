interface ICredentials {
  email: string;
  password: string;
}

interface IUserInfo {
  id: number;
  email: string;
  is_super_user: boolean;
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
