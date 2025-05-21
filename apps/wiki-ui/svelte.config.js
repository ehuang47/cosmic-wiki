import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: { adapter: adapter() }
};

// Make it return index.html if dynamic route isn't found. Should remove prerender = true
// adapterStatic({
//   fallback: 'index.html'
// })

export default config;
