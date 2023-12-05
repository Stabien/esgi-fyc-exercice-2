<script>
  import { onMount } from 'svelte';
  import Card from './Card.svelte';
  import { Link } from 'svelte-navigator';

  let recipeList = [];

  onMount(async () => {
    const response = await fetch('data.json');
    const data = await response.json();

    recipeList = data;
  });
</script>

<div>
  {#each recipeList as recipe}
    <Link to={`/${recipe.name}`}>
      <Card title={recipe.name} picture={recipe.picture} />
    </Link>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
  }

  div > :global(a) {
    text-decoration: none;
    margin-right: 20px;
    color: black;
  }
</style>
