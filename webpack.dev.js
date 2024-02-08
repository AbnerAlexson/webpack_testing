const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
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
    ]}
});