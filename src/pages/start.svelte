<script>
  import { pageCounter } from "../lib/store";

  function startGame() {
    pageCounter.update((pageCount) => pageCount + 1);
  }
</script>

<section class="hero is-fullheight">
  <div class="hero-body is-flex-direction-column is-justify-content-center">
    <p class="title">Welcome</p>
    <button class="button" on:click={startGame}> Start the game! </button>
  </div>
</section>
