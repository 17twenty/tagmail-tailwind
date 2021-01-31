const purgecss = require('@fullhuman/postcss-purgecss')


module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: ['./*.html', './src/**/*.vue'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          })
    ]
    
}



