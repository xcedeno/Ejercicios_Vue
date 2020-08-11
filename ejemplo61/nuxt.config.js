export default {
    css: [
        'bulma/css/bulma.css',
        '~/assets/css/style.css'
    ],
    modules: [
        ['nuxt-fontawesome', {
            imports: [
              {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas']
              },
              {
                set:'@fortawesome/free-brands-svg-icons',
                icons: ['fab']
              }
            ]
        }]
    ],
}