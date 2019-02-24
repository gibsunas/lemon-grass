const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './packages/core/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/spec/],
	use: {
          loader: 'ts-loader',	
	  options: {
            compilerOptions: {
              target:"es5",
              lib:["es5","es6","dom"],
	    },
            transpileOnly: true //HMR doesn't work without this
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
