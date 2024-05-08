/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./js/**/*.js"],
	theme: {
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				"cblue": "#23aaea",
				"cdark-blue": "#2a58ad",
				"cdarker-blue": "#1d4c9e",
				"cgreen": "#68b833",
				"cbg-gray": "#edf2f6",
				"ctext-gray": "#707070",
				"chead-black": "#212121",
			},
		},
	},
	plugins: [],
};
