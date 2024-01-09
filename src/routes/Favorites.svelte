<script>
  import { get } from 'svelte/store';
  import RecipeList from '../lib/RecipeList.svelte';
  import { recipeStore } from '../store';
  import { onDestroy } from 'svelte';

  let recipeStoreValue = get(recipeStore);

  const unsubscribe = recipeStore.subscribe(
    (store) => (recipeStoreValue = store)
  );

  $: favoriteRecipes = recipeStoreValue.recipes.filter((recipe) =>
    recipeStoreValue.favorites.includes(recipe.id.toString())
  );

  onDestroy(unsubscribe);
</script>

<div>
  <h1>Toutes nos recettes</h1>
  {#if !recipeStoreValue.isLoaded}
    <span>Chargement des recettes...</span>
  {:else if recipeStoreValue.error}
    <span>Impossible de charger les recettes du jour</span>
  {:else}
    <RecipeList recipes={favoriteRecipes} />
  {/if}
</div>

<style>
  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
  }
</style>
