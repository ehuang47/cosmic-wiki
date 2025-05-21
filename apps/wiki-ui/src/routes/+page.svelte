<script lang="ts">
  import { Button } from 'flowbite-svelte';

  let countState = $state(0);
  const inc = () => {
    countState += 1;
  }

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<ol class="bg-blue-200">
  <li>countState is {countState}</li>
</ol>
<Button onclick={inc} color="purple">
  increment
</Button>
