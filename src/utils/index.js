const addRecipeToFavorites = (recipeId) => {
  if (localStorage.getItem('favorites') === undefined) {
    localStorage.setItem('favorites', JSON.stringify([]))
  }
  
  const favorites = JSON.parse(localStorage.getItem('favorites'))
  localStorage.setItem('favorites', JSON.stringify([...favorites, recipeId]))
}

const removeRecipeFromRecipes = (recipeId) => {
  const favorites = JSON.parse(localStorage.getItem('favorites'))
  const filteredFavorites = favorites.filter(id => recipeId !== id)
  
  localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
}