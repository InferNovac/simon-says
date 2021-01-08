const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/javascript/main.js"],
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
};
