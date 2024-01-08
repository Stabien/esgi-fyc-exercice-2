<script>
  import searchIcon from "../assets/icon-search.png"

  export let placeholder;

  const onSubmit = () => {
    console.log("Event submit")
  }
</script>

<div class="container">
  <input type="text" {placeholder} />
  <div class="icon-container" on:click={onSubmit}>
    <img src={searchIcon} alt="icon-search" /> 
  </div>
</div>

<style scoped>
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
    padding: 7px;
    text-align: center;
    cursor: pointer;
  }

  .icon-container img {
    position: relative;
    width: 24px;
    background-color: #ff6f61;
    height: 100%;
    margin-top: 5px;
  }
</style>
