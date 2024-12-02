import RecipeModel from '../../models/RecipeList';

export default class Controller {
  static async getRecipes(setRecipes: any, setLoading: any, setError: any) {
    setLoading(true);
    setError(null);
    try {
      const recipes = await RecipeModel.fetchRecipes();
      setRecipes(recipes);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
}
