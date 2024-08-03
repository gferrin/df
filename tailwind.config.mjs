/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			extend: {
				fontFamily: {
					cinzel: ['Cinzel', 'serif'],
					arial: ['Arial', 'sans-serif'],
					georgia: ['Georgia', 'serif'],
				},
			},
		},
	},
	plugins: [],
}
