import { get, writable } from 'svelte/store';
import { fetchRecipes } from '../services';
import { addRecipeToFavorites, removeRecipeFromFavorites } from '../utils';

const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []

export const recipeStore = writable({
  recipes: [],
  isLoaded: false,
  search: "",
  error: null,
  favorites
});

export const fillRecipeStore = async () => {
  if (get(recipeStore).isLoaded) {
    return recipeStore
  }

  try {
    const recipes = await fetchRecipes()
    recipeStore.update(store => ({ ...store, recipes: recipes, isLoaded: true }))
  } catch (e) {
    recipeStore.update(store => ({ ...store, error: e }))
    console.log(e)
  }
}

export const addToFavorites = (recipeId) => {
  addRecipeToFavorites(recipeId)
  recipeStore.update((store) => ({ ...store, favorites: [...store.favorites, recipeId]}))
}

export const removeFromFavorites = (recipeId) => {
  removeRecipeFromFavorites(recipeId)
  recipeStore.update((store) => ({ ...store, favorites: [...store.favorites.filter(id => id !== recipeId)]}))
}