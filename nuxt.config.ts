// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            title: 'We bcn test',
            meta: [
                { name: 'description', content: 'All the best products in one place'}
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    }
})
