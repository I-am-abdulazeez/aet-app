import { createVuetify } from 'vuetify';

import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { fa } from 'vuetify/iconsets/fa';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '~/assets/styles/main.scss';
import '@mdi/font/css/materialdesignicons.css';

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        fa,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: '#FA7414',
            secondary: '#020740',
            accent: '#F5C3A0',
            success: '#3cd1c2',
            error: '#f83e70',
          },
        },
      },
    },
  });

  nuxt.vueApp.use(vuetify);
});
