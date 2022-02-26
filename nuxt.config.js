export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Online Mall CMS",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        href: "https://fonts.googleapis.com/css2?family=Monoton&display=swap",
        rel: "stylesheet",
      },
      {rel:"stylesheet", href:"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"}
    ],
    script: [
      { src: "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.min.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/adminLTE/plugins/fontawesome-free/css/all.min.css",
    "~/assets/adminLTE/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css",
    "~/assets/adminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
    "~/assets/adminLTE/plugins/jqvmap/jqvmap.min.css",
    "~/assets/adminLTE/dist/css/adminlte.min.css",
    "~/assets/adminLTE/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",
    "~/assets/adminLTE/plugins/daterangepicker/daterangepicker.css",
    "~/assets/adminLTE/plugins/summernote/summernote-bs4.min.css",
    "~/assets/css/style-dashboard.css",
    "~/assets/css/style-sidebar.css",
    "~/assets/css/style-table.css",
    "~/assets/css/style-form.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/api", "@/plugins/mixins/common"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://localhost:44325",
    browserBaseUrl: "https://localhost:44325",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      '~/assets/adminLTE/plugins/jquery/jquery.min.js',
      '~/assets/adminLTE/plugins/jquery-ui/jquery-ui.min.js',
      '~/assets/adminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js',
      '~/assets/adminLTE/plugins/chart.js/Chart.min.js',
      '~/assets/adminLTE/plugins/sparklines/sparkline.js',
      '~/assets/adminLTE/plugins/jqvmap/jquery.vmap.min.js',
      '~/assets/adminLTE/plugins/jqvmap/maps/jquery.vmap.usa.js',
      '~/assets/adminLTE/plugins/jquery-knob/jquery.knob.min.js',
      '~/assets/adminLTE/plugins/moment/moment.min.js',
      '~/assets/adminLTE/plugins/daterangepicker/daterangepicker.js',
      '~/assets/adminLTE/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js',
      '~/assets/adminLTE/plugins/summernote/summernote-bs4.min.js',
      '~/assets/adminLTE/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
      '~/assets/adminLTE/dist/js/adminlte.js',
      '~/assets/adminLTE/dist/js/demo.js',
      '~/assets/adminLTE/dist/js/pages/dashboard.js',
    ],
  },
};
