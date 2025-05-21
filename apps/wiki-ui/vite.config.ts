import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide'
    })
  ],
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
