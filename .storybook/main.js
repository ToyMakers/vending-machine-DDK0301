const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  webpackFinal: async config => {
    config.module.rules = [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ];
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
      '@scss': path.resolve(__dirname, './src/scss/*'),
      '@commons': path.resolve(__dirname, './src/components/commons'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@contains': path.resolve(__dirname, './src/components/contains'),
    };
    config.node = {
      __dirname: true,
      fs: 'empty',
    };
    return config;
  },
};
