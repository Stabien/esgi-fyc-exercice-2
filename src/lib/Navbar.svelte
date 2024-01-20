<script>
  import { Link, useNavigate } from 'svelte-navigator';
  import Searchbar from './Searchbar.svelte';
  import { isMatchingSearchRegex } from '../utils';

  const navigate = useNavigate();

  const onSearch = (event) => {
    if (isMatchingSearchRegex(event.detail.value)) {
      navigate(`/recipes/search/${event.detail.value}`);
    }
  };
</script>

<nav>
  <div class="nav-center-content">
    <h1>
      <Link to="/">Sveltmiton</Link>
    </h1>
    <div class="searchbar-container">
      <Searchbar on:search={onSearch} placeholder="Rechercher une recette..." />
    </div>
  </div>
  <span>
    <Link to="/favorites">Mes recettes favorites</Link>
  </span>
</nav>

<style>
  nav {
    font-size: 18px;
    display: flex;
    flex-direction: row;
    color: #ff6f61;
    background-color: white;
    padding-left: 60px;
    padding-right: 20px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 4px 0px;
    position: sticky;
    top: 0px;
  }

  .nav-center-content {
    display: flex;
    flex-direction: row;
    margin: auto;
  }

  nav h1 > :global(a) {
    text-decoration: none;
    color: #ff6f61;
    margin: auto 10;
  }

  nav span,
  .searchbar-container {
    margin: auto 10px;
  }

  .searchbar-container {
    margin-left: 20px;
    margin-right: 30px;
    width: 600px;
  }

  nav span {
    margin-left: auto;
    margin-right: 0;
    background: #ff6f61;
    padding: 12px;
    border-radius: 24px;
    font-size: 16px;
  }

  nav span > :global(a) {
    color: white;
    text-decoration: none;
    margin: auto 10px;
  }
</style>
