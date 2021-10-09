const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'createmeal.js',
        library: {
            name: "createmeal",
            type: "umd"
        }
    }
}