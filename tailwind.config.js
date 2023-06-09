/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryblue: "#004F95",
				secondaryorange: "#F78117",
				featurelightblue: "#F0F8FF",
				forgotred: "#E12C33",
				textblack: "#2A2A2A"
			},
			boxShadow: {
				nav: "0px 4px 8px -2px rgba(154, 154, 154, 0.25);",
				other: "0px 4px 8px -2px rgba(0, 79, 149, 0.25)"
			}
		}
	},
	plugins: []
}
