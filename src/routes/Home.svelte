<script>
  import { get } from 'svelte/store';
  import RecipeList from '../lib/RecipeList.svelte';
  import { recipeStore } from '../store';
  import { onDestroy } from 'svelte';

  let recipeStoreValue = get(recipeStore);

  const unsubscribe = recipeStore.subscribe(
    (store) => (recipeStoreValue = store)
  );

  $: dailyRecipes = recipeStoreValue.recipes.filter(
    (recipe) => recipe.dailyRecipe !== undefined
  );

  onDestroy(unsubscribe);
</script>

<div>
  <h1>Bienvenue sur Sveltmiton</h1>
  <h2>Nos recettes du jour</h2>
  {#if !recipeStoreValue.isLoaded}
    <span>Chargement des recettes du jour...</span>
  {:else if recipeStoreValue.error}
    <span>Impossible de charger les recettes du jour</span>
  {:else}
    <RecipeList recipes={dailyRecipes} />
  {/if}
</div>

<style>
  h1 {
    text-align: center;
    border-radius: 10px;
    color: #ff6f61;
    font-size: 24px;
    width: fit-content;
    padding: 10px 40px;
    margin: auto;
    margin-top: 40px;
    border: 2px solid #ff6f61;
  }
  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
  }

  div > :global(a) {
    text-decoration: none;
    color: #ff5f15;
    border: 2px solid #ff5f15;
    border-radius: 20px;
    padding: 8px;
    margin: auto;
    transition: 0.25s;
  }

  div > :global(a):hover {
    background-color: #ff5f15;
    color: white;
  }
</style>
