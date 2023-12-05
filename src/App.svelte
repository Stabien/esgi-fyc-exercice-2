<script>
  import { Router, Route } from 'svelte-navigator';
  import Home from './routes/Home.svelte';
  import Recipes from './routes/Recipes.svelte';
  import Recipe from './routes/Recipe.svelte';
  import Navbar from './lib/Navbar.svelte';
</script>

<Router>
  <Navbar />
  <div>
    <Route path="/" component={Home} />
    <Route path="/recipes" component={Recipes} />
    <Route path="/recipes/:id" let:params>
      <Recipe id={params.id} />
    </Route>
  </div>
</Router>
