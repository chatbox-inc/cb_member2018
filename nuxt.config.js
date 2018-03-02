module.exports = {
  /*
   ** Build configuration
   */
    build: {},
  /*
   ** Headers
   ** Common headers are already provided by @nuxtjs/pwa preset
   */
    head: {
        titleTemplate: '株式会社chatbox',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=no' },
            { hid: 'description', name: 'description', content: 'Meta description' },
        ],
        link: [
            { rel: 'shortcut icon', href: '/favicon.ico' },
            { rel:'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
        ]
    },
    css: [ ],
  /*
   ** Customize the progress-bar color
   */
    loading: { color: '#3B8070' },
  /*
   ** Customize app manifest
   */
    manifest: {
        theme_color: '#3B8070'
    },
  /*
   ** Modules
   */
    modules: [
    ],
    plugins: [
      '~/plugins/vue-smooth-scroll'
    ]
}
