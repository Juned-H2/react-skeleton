const path = require('path');

module.exports = env => {

    return {
        mode: env.isDev ? 'development' : 'production',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i,
                exclude: /node_modules/
            }]
        },
        devServer: {
            static: './',
            open: true
        },
        devtool: env.isDev ? 'eval-cheap-module-source-map' : false
    }
};
