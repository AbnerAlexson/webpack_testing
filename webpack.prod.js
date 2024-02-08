const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})],
    module: {
        rules: [
                {
                    test: /\.scss$/,
                    use: [
                     MiniCssExtractPlugin.loader, // 3. extract css into files
                     "css-loader", // 2. turn css into javascript code
                     "sass-loader" // 1. turn sass into css
                    ]
                }
        ]
    }
});