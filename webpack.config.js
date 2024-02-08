const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
       })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                 "style-loader", // 3. Inject style into dom
                 "css-loader", // 2. turn css into javascript code
                 "sass-loader" // 1. turn sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'assets/[name][hash][ext]'
                }
            }
        ]
    },
};