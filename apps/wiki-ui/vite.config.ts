import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
console.log('cwd:', process.cwd());
export default defineConfig({
  plugins: [sveltekit()]
  // server: {
  //   port: 5173,
  //   host: 'localhost'
  // },
  // resolve: {
  //   alias: {
  //     '@wiki-ui/root': fileURLToPath(new URL('/libs/counter/src/index.ts', import.meta.url))
  //   }
  // }
});
