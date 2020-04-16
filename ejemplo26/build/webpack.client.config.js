const base = require('./webpack.config')

const congig = Object.assign({},base,{
    plugins: base.plugins || []
});

module.exports = congig