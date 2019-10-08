module.exports = {
  entry: './src/index.js',
  mode:'development',
  watch:true,
  module: {
    rules: [
     {
        test: /\.css|\.s(c|a)ss$/,
        use: [{
          loader: 'lit-scss-loader',
          options: {
            minify: true, // defaults to false
          },
        }, 'extract-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-class-properties']
        }
      }
    ],
  },
};