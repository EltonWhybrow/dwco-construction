const purgecss = require('@fullhuman/postcss-purgecss')

const purgecssConfig = purgecss({
    content: ['./**/*.html', './js/*.js']
})

module.exports = ({ env }) => ({
    plugins: [
        env === 'production' ? purgecssConfig : false,
    ]
})