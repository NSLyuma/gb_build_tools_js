const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, "src", "main.js"),
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.build.js",
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.mp3$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                        },
                    },
                ],
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "index.html")
        })
    ],
}