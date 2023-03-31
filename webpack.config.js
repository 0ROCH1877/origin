const path = require('path');

module.exports = {
    entry: './webpack.config-js.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'script.js'),
    },
};
module.exports = {
    mode: 'development', // ou 'production' ou 'none'
    // restante da configuração
  }
  
