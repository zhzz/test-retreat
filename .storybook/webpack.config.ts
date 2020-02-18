export default ({ config }) => {
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader')
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }
      
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};