const path = require('path');
const { dirname } = require('path/posix');

module.exports = {
    entry:'./src/app.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'/dist'),
        publicPath: 'dist'
    }
}