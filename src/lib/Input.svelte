<script>
  let value = '';
</script>

<input type="text" bind:value on:input={() => console.log(value)} />
