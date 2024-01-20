<script>
  import searchIcon from '../assets/icon-search.png';
  import { createEventDispatcher } from 'svelte';

  export let placeholder;
  let value = '';

  const dispatch = createEventDispatcher();

  const onSubmit = () => {
    dispatch('search', {
      value: value.toLowerCase(),
    });
  };
</script>

<div class="container">
  <input type="text" {placeholder} bind:value />
  <button class="icon-container" on:click={onSubmit}>
    <img src={searchIcon} alt="icon-search" />
  </button>
</div>

<style>
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
    padding: 8px;
    text-align: center;
    cursor: pointer;
    border: none;
  }

  .icon-container img {
    position: relative;
    width: 24px;
    background-color: #ff6f61;
    height: 100%;
    margin-top: 5px;
  }
</style>
