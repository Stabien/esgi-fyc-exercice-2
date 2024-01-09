export const addRecipeToFavorites = (recipeId) => {
  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]))
  }
  
  const favorites = JSON.parse(localStorage.getItem('favorites'))
  localStorage.setItem('favorites', JSON.stringify([...favorites, recipeId]))
}

export const removeRecipeFromFavorites = (recipeId) => {
  const favorites = JSON.parse(localStorage.getItem('favorites'))
  const filteredFavorites = favorites.filter(id => recipeId !== id)
  
  localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
}

export const isRecipeFavorite = (recipedId) => {
  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]))
  }

  const favorites = JSON.parse(localStorage.getItem('favorites'))
  return favorites.includes(recipedId)
}