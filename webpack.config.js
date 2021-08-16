console.log(process.env.NODE_ENV);

const mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';
const devtool = process.env.NODE_ENV === 'production' ? false : 'source-map';

module.exports = {
    mode: mode,
    // devtool: false,
    devServer: {
        contentBase: './dist',
    },
};
