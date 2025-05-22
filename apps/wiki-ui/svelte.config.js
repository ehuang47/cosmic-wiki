import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    files: {
      assets: 'static',
      routes: 'src/routes'
    }
  }
};

// Make it return index.html if dynamic route isn't found. Should remove prerender = true
// adapterStatic({
//   fallback: 'index.html'
// })
