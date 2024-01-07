<script>
  export let placeholder;
</script>

<div>
  <input type="text" {placeholder} />
  <i class="fi fi-rr-search"></i>
</div>

<style>
  div,
  input {
    width: 100%;
    font-family: 'Roboto';
  }

  input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #cfcfcf;
    font-size: 16px;
  }
</style>
