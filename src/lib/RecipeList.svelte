<script>
  import RecipeListItem from './RecipeListItem.svelte';

  export let recipes = []
</script>

  <div class="list-container">
    {#each recipes as recipe}
      <RecipeListItem data={recipe} />
    {/each}
  </div>

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
