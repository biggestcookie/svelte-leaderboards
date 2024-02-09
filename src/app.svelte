<script>
  import Leaderboard from "./lib/leaderboard.svelte";
  import Game from "./pages/game.svelte";
  import Start from "./pages/start.svelte";

  let pageCounter = 0;

  function goNextPage() {
    pageCounter++;
  }
</script>

<main>
  {#if pageCounter == 0}
    <Start pageHandler={goNextPage} />
  {:else if pageCounter == 1}
    <Game pageHandler={goNextPage} />
  {:else}
    <Leaderboard />
  {/if}
</main>
