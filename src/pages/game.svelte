<script>
  import { pageCounter } from "../lib/store";

  function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomizeCoordinates() {
    const padding = 50;
    const x = getRandomRange(padding, window.innerWidth - padding);
    const y = getRandomRange(padding, window.innerHeight - padding);
    return { x, y };
  }

  function finishGame() {
    const finishTime = performance.now();
    console.log(finishTime - startTime);
    pageCounter.update((pageCount) => pageCount + 1);
  }

  const { x, y } = randomizeCoordinates();
  const startTime = performance.now();
</script>

<button class="button" style="left: {x}px, top: {y}px;" on:click={finishGame}>
  Click me!
</button>

<style>
  .button {
    position: absolute;
  }
</style>
