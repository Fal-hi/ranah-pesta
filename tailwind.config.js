/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./App.{js,jsx,ts,tsx}", "./(tabs)/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./app.{js,jsx,ts,tsx}", // Untuk root App.js atau file utama
    "./app/**/*.{js,jsx,ts,tsx}", // Untuk semua folder di dalam /app
    "./(tabs)/**/*.{js,jsx,ts,tsx}", // Semua file di dalam folder (tabs)
    "./(auth)/**/*.{js,jsx,ts,tsx}", // Jika kamu memiliki folder lain seperti (auth)
    "./components/**/*.{js,jsx,ts,tsx}", // Jika ada folder untuk komponen reusable
    "./assets/**/*.{js,jsx,ts,tsx}", // Jika ada folder untuk icons
    "./ui/**/*.{js,jsx,ts,tsx}", // Jika ada folder untuk icons
  ],
  theme: {
    extend: {
      colors: {
        primary: "#914853",
        "primary-light": "#B06671",
        secondary: "#FDE8DC",
        pink: "#E9CAC5",
        black: "#201F1F",
        white: "#FFFFFF",
        red: "#FF3654",
        green: "#21BF76",
        blue: "#3079E5",
      },
      fontFamily: {
        poppins: ["Poppins-Regular", "sans-serif"],
        lora: ["Lora-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
