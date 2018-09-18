var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SnippetComponent.js',
    output: {
        path: path.resolve('lib'),
        filename: 'SnippetComponent.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
