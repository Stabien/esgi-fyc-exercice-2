<script>
  import { get } from 'svelte/store';
  import RecipeList from '../lib/RecipeList.svelte';
  import { getContext } from 'svelte';
  import { favoriteStore } from '../store';

  let recipeStore = getContext('recipeStore');

  $: recipes = $recipeStore.recipes;
  $: favoriteRecipes = recipes.filter((recipe) =>
    $favoriteStore.includes(recipe.id.toString())
  );
</script>

<div>
  <h1>Mes recettes favorites</h1>
  {#if !$recipeStore.isLoaded}
    <span>Chargement des recettes...</span>
  {:else if $recipeStore.error}
    <span>Impossible de charger les recettes du jour</span>
  {:else if $favoriteStore.length === 0}
    <span>Vous n'avez aucune recettes dans vos favoris</span>
  {:else}
    <RecipeList recipes={favoriteRecipes} />
  {/if}
</div>

<style>
  h1 {
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
