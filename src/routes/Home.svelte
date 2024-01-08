<script>
  import RecipeList from '../lib/RecipeList.svelte';

  let recipes = []
  let dailyRecipes = []

  const fetchRecipes = async () => {
    const response = await fetch('data.json');
    const data = await response.json();

    recipes = data
    dailyRecipes = recipes.filter(recipe => recipe.dailyRecipe !== undefined)
  };

</script>

<div>
  <h1>Bienvenue sur Sveltmiton</h1>
  <h2>Nos recettes du jour</h2>
  {#await fetchRecipes()}
    <span>Chargement des recettes du jour...</span>
  {:then}
    <RecipeList recipes={dailyRecipes} />
  {:catch}
    <span>Impossible de charger les recettes du jour</span>
  {/await}
</div>

<style>
  h1 {
    text-align: center;
    border-radius: 10px;
    color: #FF6F61;
    font-size: 24px;
    width: fit-content;
    padding: 10px 40px;
    margin: auto;
    margin-top: 40px;
    border: 2px solid #FF6F61;
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
