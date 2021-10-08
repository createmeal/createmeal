const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'jsml.js',
        library: {
            name: "jsml",
            type: "umd"
        }
    }
}