const searchRegex = /[a-zA-Z]/

export const isMatchingSearchRegex = (search) => searchRegex.test(search)

export const addLocalFavorite = (recipeId) => {
  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]))
  }
  
  const favorites = JSON.parse(localStorage.getItem('favorites'))
  localStorage.setItem('favorites', JSON.stringify([...favorites, recipeId]))
}

export const removeLocalFavorite = (recipeId) => {
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