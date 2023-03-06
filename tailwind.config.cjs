/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            "jello-horizontal": "jello-horizontal 0.8s ease both"
        },
        keyframes: {
            "jello-horizontal": {
                "0%,to": {
                    transform: "scale3d(1, 1, 1)"
                },
                "30%": {
                    transform: "scale3d(1.25, .75, 1)"
                },
                "40%": {
                    transform: "scale3d(.75, 1.25, 1)"
                },
                "50%": {
                    transform: "scale3d(1.15, .85, 1)"
                },
                "65%": {
                    transform: "scale3d(.95, 1.05, 1)"
                },
                "75%": {
                    transform: "scale3d(1.05, .95, 1)"
                }
            }
        }
    }
},
  plugins: []
}
