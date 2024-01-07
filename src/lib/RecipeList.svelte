<script>
  import { onMount } from 'svelte';
  import RecipeListItem from './RecipeListItem.svelte';

  let recipeList = [];
  let isLoading = true;

  onMount(async () => {
    const response = await fetch('data.json');
    const data = await response.json();

    recipeList = data;
    isLoading = false;
  });
</script>

{#if isLoading}
  <div>Chargement des recettes...</div>
{:else}
  <div class="list-container">
    {#each recipeList as recipe}
      <RecipeListItem data={recipe} />
    {/each}
  </div>
{/if}

<style>
  .list-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1000px;
  }

  div > :global(div) {
    margin-right: 20px;
    color: black;
    margin-bottom: 20px;
  }
</style>
