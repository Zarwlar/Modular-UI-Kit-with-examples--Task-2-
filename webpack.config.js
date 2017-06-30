var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'stylus-loader']
                })
            },
            {
                test: /\.(pug|jade)$/,
                use: ['html-loader?attrs=img:src', 'pug-html-loader']
            },
            {
                test: /\.svg$/,
                use: 'url-loader?limit=15000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
            },
            {
                test: /\.woff$/,
                use: 'url-loader?limit=15000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            },
            {
                test: /\.woff2$/,
                use: 'url-loader?limit=15000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
            },
            {
                test: /\.[ot]tf$/,
                use: 'url-loader?limit=15000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
            },
            {
                test: /\.eot$/,
                use: 'url-loader?limit=15000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: [/fonts/],
                use: "file-loader?outputPath=img/&name=[name].[ext]"
            },
            {
                test: /\.mp4$/i,
                use: "file-loader?outputPath=video/&name=[name].[ext]"
            },

            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "vendor")
                ]
            },
            {
                test: /\.(ico)$/i, use: "file-loader?name=[name].[ext]"
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
            template: "./src/index.pug"
        }), 
        new HtmlWebpackPlugin({
            chunks: ['app'],
            filename: 'main.html',
        template: './src/main.pug'
    }),
    new HtmlWebpackPlugin({
        chunks: ['app'],
        filename: 'market.html',
        template: './src/market.pug'
    }),
    new HtmlWebpackPlugin({
        chunks: ['app'],
        filename: 'stuff.html',
        template: './src/stuff.pug'
    }),
    new HtmlWebpackPlugin({
        chunks: ['app'],
        filename: 'seller.html',
        template: './src/seller.pug'
    }),
    new HtmlWebpackPlugin({
        chunks: ['app'],
        filename: 'order.html',
        template: './src/order.pug'
    }),
   new ExtractTextPlugin({
            filename: 'app.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]


}