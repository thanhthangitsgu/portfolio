import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
		Components({
			resolvers: [
				PrimeVueResolver()
			]
		}),
		tailwindcss(),
	],
	css: {
		preprocessorOptions: {
			scss: {

      },
      sass: {}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url))
		}
	}
})
