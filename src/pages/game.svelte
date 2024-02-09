<script>
  import { lastCompletedTime } from "../lib/store";

  export let pageHandler;

  function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomizeCoordinates() {
    const padding = 150;
    const x = getRandomRange(padding, window.innerWidth - padding);
    const y = getRandomRange(padding, window.innerHeight - padding);
    return { x, y };
  }

  function finishGame() {
    // Measure time since start timer in milliseconds
    const completionTime = performance.now() - startTime;

    // Store completion time in store so that next component can see it
    lastCompletedTime.set(completionTime);

    // Progress to next page
    pageHandler();
  }

  // Set coordinates on startup
  const { x, y } = randomizeCoordinates();

  // Start timer
  const startTime = performance.now();
</script>

<button
  class="button"
  style:left="{x}px"
  style:top="{y}px"
  on:click={finishGame}
>
  Click me!
</button>

<style>
  .button {
    position: absolute;
  }
</style>
