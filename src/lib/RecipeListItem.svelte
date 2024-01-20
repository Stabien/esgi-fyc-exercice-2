<script>
  import { navigate } from 'svelte-navigator';

  export let data;

  const navigateToDetails = () => {
    navigate(`/recipes/${data.id}/`, { state: data });
  };
</script>

<div>
  <button on:click={navigateToDetails}>
    <img src="/{data.picture}" alt="preview" />
    <h3>{data.name}</h3>
  </button>
</div>

<style>
  button {
    width: 300px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 4px 0px;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    padding: 0;
    border: none;
  }

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    margin: 0;
    padding: 15px 0px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #3f3f3f;
    text-align: left;
  }
</style>
