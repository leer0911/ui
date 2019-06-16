const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          sourceMap: true,
          javascriptEnabled: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });
  return config;
};
