const path = require('path');

module.exports = {
    entry: './webpack.config.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
module.exports = {
    mode: 'development', // ou 'production' ou 'none'
    // restante da configuração
  }
  
