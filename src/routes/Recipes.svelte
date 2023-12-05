<script>
  import RecipeList from '../lib/RecipeList.svelte';
</script>

<div>
  <h1>Nos recettes</h1>
  <RecipeList />
</div>

<style>
  h1 {
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
  }
</style>
