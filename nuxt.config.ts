import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-09-27',
	devtools: { enabled: false },

	modules: ['@nuxtjs/tailwindcss', 'nuxtjs-naive-ui'],

	vite: {
		plugins: [
			AutoImport({
				imports: [
					{ 'naive-ui': ['useDialog', 'button', 'useMessage', 'useNotification', 'useLoadingBar'] },
				],
			}),
			Components({
				resolvers: [NaiveUiResolver()],
			}),
		],
	},

	future: {
		compatibilityVersion: 4,
	},
})
