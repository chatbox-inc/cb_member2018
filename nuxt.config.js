const meta = {
  description: "株式会社chatboxは大阪堺筋本町の小さなWeb制作会社です。Web制作や技術顧問、イベント運営など、最新のWeb製作技術を活かした様々な活動を行っています。",
  title: "メンバー紹介 | 株式会社 chatbox(チャットボックス)"
}

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
        titleTemplate: meta.title,
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=no' },
          { name: 'description', content: meta.description },
          { name: 'keyword', content: "大阪,Web制作,技術顧問,イベント,PHP,フロントエンド,株式会社chatbox,チャットボックス" },
          { property: 'og:title', content: meta.title },
          { property: 'og:image', content: 'https://chatbox-inc.com/images/ogp.jpg' },
          { property: 'og:url', content: 'https://chatbox-inc.com/' },
          { property: 'og:description', content: meta.description},
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@chatbox_inc' },
          { name: 'twitter:creator', content: '@chatbox_inc' },
          { name: 'twitter:title', content: meta.title },
          { name: 'twitter:description', content: meta.description },
          { name: 'twitter:image', content: 'https://chatbox-inc.com/images/ogp.jpg' },
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
