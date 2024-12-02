export default class RecipeList {
    static async fetchRecipes() {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) throw new Error('Failed to fetch recipes');
        const data = await response.json();
        return data.recipes; 
      } catch (error) {
        throw error;
      }
    }
  }
  