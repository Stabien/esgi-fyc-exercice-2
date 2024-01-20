<script>
  import { useParams } from 'svelte-navigator';
  import RecipeList from '../lib/RecipeList.svelte';
  import { getContext } from 'svelte';

  const params = useParams();

  let recipeStore = getContext('recipeStore');

  $: recipes = $recipeStore.recipes;
  $: searchRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes($params.search.toLowerCase())
  );
</script>

<div>
  <h1>Toutes nos recettes</h1>
  {#if !$recipeStore.isLoaded}
    <span>Chargement des recettes...</span>
  {:else if $recipeStore.error}
    <span>Impossible de charger les recettes du jour</span>
  {:else}
    <RecipeList recipes={searchRecipes} />
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
