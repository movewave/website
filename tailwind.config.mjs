/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'payflo-purple': '#7928CA',
				'payflo-blue': '#0070F3',
				'payflo-dark': '#1a1a1a',
				'payflo-gray': '#f8fafc',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}