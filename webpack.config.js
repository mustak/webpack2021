let mode = 'development';
let devtool = 'source-map';

if (process.env.NODE_ENV === 'production') {
    (mode = 'production'), (devtool = false);
}
// const mode =
//     process.env.NODE_ENV === 'production' ? 'production' : 'development';
// const devtool = process.env.NODE_ENV === 'production' ? false : 'source-map';

module.exports = {
    mode: mode,
    devtool: devtool,

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },

    devServer: {
        contentBase: './dist',
    },
};
