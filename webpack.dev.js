const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/i,

                // from all svg images
                // include only sprite image
                include: /.*_sprite\.svg/,

                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            publicPath: '',
                        }
                    },
                ],
            },
        ]
    },
        plugins: [
    // ...
    new SpriteLoaderPlugin()
],
})