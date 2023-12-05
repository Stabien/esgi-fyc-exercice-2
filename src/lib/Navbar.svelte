<script>
  import { Link } from 'svelte-navigator';
</script>

<nav>
  <ul>
    <li>
      <Link to="/">Accueil</Link>
    </li>
    <li>
      <Link to="/recipes">Recettes</Link>
    </li>
  </ul>
</nav>

<style>
  nav {
    background-color: #ff5f15;
    font-size: 18px;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    padding: 8px 0px;
    justify-content: center;
    margin: 0;
  }

  nav ul li {
    list-style: none;
    padding: 5px;
    margin: 0 10px;
  }

  nav ul li > :global(a) {
    text-decoration: none;
    color: white;
  }
</style>
