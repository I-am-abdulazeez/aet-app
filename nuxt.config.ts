import vuetify from 'vite-plugin-vuetify';

// PWA Config
const title = 'ANtrum Engineering';
const shortTitle = 'Nuxy Store';
const description =
  'ANTRUM ENGINEERING AND TECHNOLOGY COMPANY (NIGERIA) LIMITED (AET) RC1246959 is a wholly Nigerian engineering company incorporated under the laws of the Federal Republic of Nigeria to harness the capacity to render Electrical Power Engineering, Management and Consultancy Services having been successful with executing several electrical projects with vast experience garnered since 2005 from its conception and registration as AET’ Company.';
const image = 'https://antrumengineering.com/logo.png';
const url = 'https://antrumengineering.com/';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // import styles
  css: ['@/assets/styles/main.scss'],
  devtools: { enabled: true },
  // enable takeover mode
  typescript: { shim: false },
  build: { transpile: ['vuetify'] },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],

  app: {
    head: {
      title: 'Antrum Engineering',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700;8..60,800&display=swap',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
        { rel: 'canonical', href: url },
      ],
      meta: [
        {
          name: 'keywords',
          content:
            'Aet, AET, AEt, Aet power, Antrum Engineering, Aet engineering power',
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        { property: 'og:site_name', content: title },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image,
        },
        //Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: url,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image,
        },
      ],
    },
  },

  nitro: {
    devServer: {
      // My files are under src, if yours are in the root you can change this to ./
      watch: ['./src'],
    },
  },
});
