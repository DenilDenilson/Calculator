/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Thema 1
      // Backgrounds
      // VDDB: Very_Dark_Desaturated_Blue
      'VDDB_main_background': 'hsl(222, 26%, 31%)',
      'VDDB_toggle_keypad_background': 'hsl(223, 31%, 20%)',
      'VDDB_screen_background': 'hsl(224, 36%, 15%)',
    
      // Keys
      // DDB: Desaturated_Dark_Blue
      'DDB_key_background': 'hsl(225, 21%, 49%)',
      'DDB_key_shadow': 'hsl(224, 28%, 35%)',
    
      'Red_key_background_toggle': 'hsl(6, 63%, 50%)',
      'Dark_red_key_shadow': 'hsl(6, 70%, 34%)',
    
      'Light_grayish_orange_key_background': 'hsl(30, 25%, 89%)',
      'Grayish_orange_key_shadow': 'hsl(28, 16%, 65%)',
    
      // Text
    
      'Very_dark_grayish_blue': 'hsl(221, 14%, 31%)',
      'White': '#FFFFFF',
    },
  },
  plugins: [],
}