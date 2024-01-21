import { get, writable } from 'svelte/store';
import { fetchRecipes } from '../services';
import { addLocalFavorite, removeLocalFavorite } from '../utils';

const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []

export const recipeStore = writable({
  recipes: [],
  isLoaded: false,
  error: null,
});

export const favoriteStore = writable(favorites)

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
  addLocalFavorite(recipeId)
  favoriteStore.update((store) => ([...store, recipeId]))
}

export const removeFromFavorites = (recipeId) => {
  removeLocalFavorite(recipeId)
  favoriteStore.update((store) => ([...store.filter(id => id !== recipeId)]))
}