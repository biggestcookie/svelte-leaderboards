<script>
  import Leaderboard from "./lib/leaderboard.svelte";
  import { pageCounter } from "./lib/store";
  import Game from "./pages/game.svelte";
  import Start from "./pages/start.svelte";
</script>

<main>
  {#if $pageCounter == 0}
    <Start />
  {:else if $pageCounter == 1}
    <Game />
  {:else}
    <Leaderboard />
  {/if}
</main>
