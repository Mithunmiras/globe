/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // The Digital Globe stylesheet ships its own reset (src/index.css), so
  // Tailwind's preflight is switched off to keep the two from fighting.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        primary: "#24438C",
        secondary: "#E5B94A",
        background: "#F2F4F9",
        textPrimary: "#0F1A36",
        textSecondary: "#5E6A85",
      },
    },
  },
  plugins: [],
};
