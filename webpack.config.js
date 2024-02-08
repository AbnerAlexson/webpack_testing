const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
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
            }
        ]
    },
};