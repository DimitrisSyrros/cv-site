const Dotenv = require("dotenv-webpack");

module.exports = {
    async headers() {
        return [
            {
                source: '/api/contact',
                headers: [
                    {
                        key:'Content-Type',
                        value: 'application/json'
                    },
                ],
            },
        ]
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new Dotenv({ silent: true }));
        const rules = [
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
}
