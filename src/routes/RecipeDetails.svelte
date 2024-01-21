<script>
  import { useLocation } from 'svelte-navigator';
  import { addToFavorites, favoriteStore, removeFromFavorites } from '../store';
  import Toast from '../lib/Toast.svelte';

  export let id;

  const location = useLocation();
  const data = $location.state;

  let toast = {
    isDisplayed: false,
    variant: 'INFORMATION',
    message: 'Recette ajoutée aux favoris',
  };

  const toggleToast = (label) => {
    toast.isDisplayed = true;
    toast.variant = 'INFORMATION';
    toast.message = label;
  };

  const remove = () => {
    removeFromFavorites(id);
    toggleToast('Recette retirée des favoris');
  };

  const add = () => {
    addToFavorites(id);
    toggleToast('Recette ajoutée aux favoris');
  };
</script>

{#if toast.isDisplayed}
  <Toast variant={toast.variant} bind:isDisplayed={toast.isDisplayed}>
    {toast.message}
  </Toast>
{/if}

<div class="container">
  <div class="header-container">
    <img src={`/${data.picture}`} alt={id} />
    {#if $favoriteStore.includes(id)}
      <button class="remove-favorite-button" on:click={remove}>
        Retirer des favoris
      </button>
    {:else}
      <button class="add-favorite-button" on:click={add}>
        Ajouter aux favoris
      </button>
    {/if}
  </div>

  <h1>{data.name}</h1>
  <h2>Liste d'ingrédients</h2>
  {#each data.foodstuffs as foodstuff}
    <div class="foodstuff">
      {#if foodstuff.type === 'PIECE'}
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
    color: #ff6f61;
  }

  .container {
    width: 800px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 4px 0px;
  }

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .header-container button {
    height: fit-content;
    border: 1px solid #ff6f61;
    padding: 12px;
    border-radius: 20px;
    cursor: pointer;
  }

  .add-favorite-button {
    color: #ff6f61;
    background-color: white;
    transition: 0.25s;
  }

  .add-favorite-button:hover {
    background-color: #ff6f61;
    color: white;
  }

  .remove-favorite-button {
    background-color: #ff6f61;
    color: white;
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
