const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                test: /\.s?css$/i
            }]
        },
        devServer: {
            static: './',
            open: true,
            historyApiFallback: true
        },
        devtool: env.isDev ? 'eval-cheap-module-source-map' : false,
        plugins: [new HtmlWebpackPlugin({
            title: 'React Skeleton',
            template: './index.html'
        })]
    }
};
