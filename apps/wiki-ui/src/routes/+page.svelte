<script lang="ts">
  let countState = $state(0);
  const inc = () => {
    countState += 1;
  }

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<ol>
  <li>countState is {countState}</li>
</ol>
<button onclick={inc}>
  increment
</button>
