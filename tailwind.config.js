/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary00: '#000000',
				primary08: '#161513',
				primary18: '#312f2b',
				primary28: '#4c4943',
				primary38: '#67635b',
				primary48: '#827D73',
				primary68: '#c3b697',
				primary78: '#d6cdb8',
				primary88: '#e9e4d8',
				primary94: '#f4f2ec',
				primary97: '#f9f8f5',
				primary100: '#ffffff'
			},
			fontFamily: {
				sans: ['Alexandria', 'sans-serif']
			},
			fontSize: {
				xs: ['14px', '16px'], // [fontSize, lineHeight]
				sm: ['16px', '20px'],
				md: ['20px', '24px'],
				base: ['24px', '28px'],
				lg: ['32px', '32px'],
				xl: ['48px', '36px'],
				'2xl': ['64px', '40px']
			},
			letterSpacing: {
				tighter: '0.5px',
				tight: '0.75px',
				normal: '1px',
				wide: '2.5px',
				wider: '5px'
			},
			fontWeight: {
				light: 300,
				normal: 400,
				medium: 500,
				bold: 700
			}
		}
	},
	plugins: []
};
