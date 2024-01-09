<script>
  import { useNavigate } from 'svelte-navigator';
  import searchIcon from '../assets/icon-search.png';
  import { recipeStore } from '../store';

  export let placeholder;

  const navigate = useNavigate();
  let value = '';

  const onSubmit = () => {
    recipeStore.update((store) => ({ ...store, search: value }));
    navigate('/recipes');
  };
</script>

<div class="container">
  <input type="text" {placeholder} bind:value />
  <div class="icon-container" on:click={onSubmit}>
    <img src={searchIcon} alt="icon-search" />
  </div>
</div>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
  }

  div,
  input {
    width: 100%;
    font-family: 'Roboto';
  }

  input {
    padding: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px solid #cfcfcf;
    border-right: none;
    font-size: 16px;
  }

  .icon-container {
    width: 40px;
    position: relative;
    height: 100%;
    background-color: #ff6f61;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 7px;
    text-align: center;
    cursor: pointer;
  }

  .icon-container img {
    position: relative;
    width: 24px;
    background-color: #ff6f61;
    height: 100%;
    margin-top: 5px;
  }
</style>
