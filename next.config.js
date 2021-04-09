const withSass = require("@zeit/next-sass");
module.exports = withSass({
    webpack(config, options) {
        const rules = [{
            test: /\.scss$/,
            use: [
                {loader: "sass-loader"}
            ]
        },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './public/assets', // if you don't use ../ it will put it inside ".next" folder by default
                            publicPath: 'assets/',
                        }
                    },
                ],
            },

        ];
        return {
            ...config,
            module: {
                ...config.module,
                rules: [...config.module.rules, ...rules]
            }
        };
    }
});
