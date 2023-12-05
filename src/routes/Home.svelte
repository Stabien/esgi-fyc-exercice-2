<script>
  import { Link } from 'svelte-navigator';
</script>

<div>
  <h1>Bienvenue sur Sveltmiton</h1>
  <Link to="/recipes">Découvrez dès à présent toutes nos recettes !</Link>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
  }

  div > :global(a) {
    text-decoration: none;
    color: #ff5f15;
    border: 2px solid #ff5f15;
    border-radius: 20px;
    padding: 8px;
    margin: auto;
    transition: 0.25s;
  }

  div > :global(a):hover {
    background-color: #ff5f15;
    color: white;
  }
</style>
