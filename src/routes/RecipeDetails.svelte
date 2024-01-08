<script>
  import { useLocation } from 'svelte-navigator';

  export let id;

  const location = useLocation();
  const data = $location.state;
</script>

<div class="container">
  <img src={`/${data.picture}`} alt={id} />
  <h1>{data.name}</h1>

  <h2>Liste d'ingrédients</h2>
  {#each data.foodstuffs as foodstuff}
    <div class="foodstuff">
      {#if foodstuff.type === "PIECE"}
        <span>- {foodstuff.quantity} {foodstuff.name}</span>
      {:else}
        <span>- {foodstuff.quantity}g de {foodstuff.name}</span>
      {/if}
    </div>
  {/each}
</div>

<style>
  h1 {
    margin-top: 5px;
    color: #FF6F61;
  }

  .container {
    width: 800px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }

  img {
    width: 500px;
    height: 300px;
    border-radius: 8px;
    object-fit: cover;
  }

  .foodstuff span {
    display: block;
    margin-bottom: 20px;
  }
</style>
