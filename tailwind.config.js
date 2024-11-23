/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary00: '#000000',
				primary08: '#1a170f',
				primary18: '#3a3322',
				primary28: '#5b4f34',
				primary38: '#7b6b47',
				primary58: '#b19f77',
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
				base: ['20px', '24px'],
				lg: ['32px', '28px'],
				xl: ['48px', '32px'],
				'2xl': ['64px', '36px']
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
				medium: 500, // currently this is no different from normal
				bold: 700
			}
		}
	},
	plugins: []
};
