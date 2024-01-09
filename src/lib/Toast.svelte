<script>
  import { fly } from 'svelte/transition';

  export let variant = 'INFORMATION';
  export let isDisplayed = false;
</script>

<div
  class={`toast ${variant.toLocaleLowerCase()}`}
  in:fly={{ y: -30, duration: 500 }}
  out:fly={{ y: -30, duration: 500, delay: 2000 }}
  on:animationend={() => {
    isDisplayed = false;
  }}
>
  <slot />
</div>

<style>
  .toast {
    position: fixed;
    top: 100px;
    right: 50%;
    transform: translate(50%);
    padding: 12px;
    border-radius: 10px;
    color: white;
    z-index: 100;
  }

  .information {
    background: rgb(29, 156, 230);
  }
</style>
