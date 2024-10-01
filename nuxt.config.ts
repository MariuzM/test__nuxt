// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-09-27',
	devtools: { enabled: true },

	modules: ['@nuxtjs/tailwindcss'],

	routeRules: {
		// '/': {
		// 	prerender: true,
		// },
		// '/**': {
		// 	prerender: true,
		// },
	},

	future: {
		compatibilityVersion: 4,
	},
})
