/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["src/*.html"],
	theme: {
		extend: {
			colors: {
				primary: "#00b5bf",
				secondary: "#00806d",
				darkish: "#0c3537",
			},
		},
	},

	plugins: [],
	variants: {
		display: ["responsive", "hover", "focus"],
	},
};
