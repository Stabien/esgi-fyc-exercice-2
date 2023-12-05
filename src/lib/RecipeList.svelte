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
  <div>
    {#each recipeList as recipe}
      <RecipeListItem data={recipe} />
    {/each}
  </div>
{/if}

<style>
  div {
    display: flex;
    flex-direction: row;
  }

  div > :global(div) {
    margin-right: 20px;
    color: black;
  }
</style>
