/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import "@fortawesome/fontawesome-free/css/all.css";
import 'vuetify/styles'
import { fa } from "vuetify/iconsets/fa";
import { aliases } from "vuetify/iconsets/fa";

// Composable
import { createVuetify, type ThemeDefinition } from "vuetify";

// Define the theme type
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: lightTheme,
    },
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  
})
