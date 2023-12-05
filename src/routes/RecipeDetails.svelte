<script>
  import { onMount } from 'svelte';
  import { useLocation } from 'svelte-navigator';

  export let id;

  const location = useLocation();
  const data = $location.state;
</script>

<div class="container">
  <img src={`/${data.picture}`} alt={id} />
  <h1>{data.name}</h1>

  <h2>Ingrédients</h2>
  {#each data.foodstuffs as foodstuff}
    <div class="foodstuff">
      <h3>{foodstuff.name}</h3>
      <span>Quantité : {foodstuff.quantity}g</span>
    </div>
  {/each}
</div>

<style>
  .container {
    margin-top: 10px;
    margin-left: 10px;
  }

  img {
    width: 300px;
    height: 180px;
    border-radius: 10px;
  }

  .foodstuff h3 {
    margin-bottom: 0;
  }
</style>
