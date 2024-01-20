<script>
  import RecipeList from '../lib/RecipeList.svelte';
  import { favoriteStore } from '../store';
  import { getContext } from 'svelte';

  let recipeStore = getContext('recipeStore');

  $: recipes = $recipeStore.recipes;
  $: favoriteRecipes = recipes.filter((recipe) =>
    $favoriteStore.includes(recipe.id.toString())
  );
</script>

<div>
  <h1>Toutes nos recettes</h1>
  {#if !$recipeStore.isLoaded}
    <span>Chargement des recettes...</span>
  {:else if $recipeStore.error}
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
