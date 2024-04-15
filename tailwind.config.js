/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			primaryColor: '#010a5e',
			primaryLight: '#0000ff',
			primaryColorLight: '#010d78',
			secondaryColor: '#FFCC00',
			paragraphColor: '#c0c0c0',
			whiteColor: '#fff',
			blackColor: '#000',
			greenColor: '#007936',
			redColor: '#cc3433',
			darkColor: '#000',
			darkColorLight: '#171717',
		},

		// extend: {},
	},
	plugins: [],
};
