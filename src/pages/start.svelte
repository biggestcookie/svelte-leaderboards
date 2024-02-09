<script>
  export let pageHandler;
</script>

<section class="hero is-fullheight">
  <div class="hero-body is-flex-direction-column is-justify-content-center">
    <p class="title">Welcome</p>
    <button class="button" on:click={pageHandler()}> Start the game! </button>
  </div>
</section>
