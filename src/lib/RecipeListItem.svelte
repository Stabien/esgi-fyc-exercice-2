<script>
  import { navigate } from 'svelte-navigator';

  export let data;

  const navigateToDetails = () => {
    navigate(`/recipes/${data.id}/`, { state: data });
  };
</script>

<div on:click={navigateToDetails}>
  <img src={data.picture} alt="preview" />
  <h3>{data.name}</h3>
</div>

<style>
  div {
    width: 300px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    cursor: pointer;
  }

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 200px;
  }

  h3 {
    margin: 0;
    padding: 15px 0px;
    margin-left: 10px;
  }
</style>
