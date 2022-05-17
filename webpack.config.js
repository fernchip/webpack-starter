// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /styles\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    // minimize: true
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }
                }]
            },
        ],
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, './src/index.html'),
            // title: path.resolve(__dirname, './index.html'),
            template: './src/index.html',
            title: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets/" },
                // { from: "other", to: "public" },
            ],

            // { from: 'src/assets', to: 'assets/' }
        }),
    ],

};