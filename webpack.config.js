const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require( 'path' );
module.exports = {
   context: __dirname,
   //the source map option helps you track down errors. When it's turned on it shows you where you errors came from
   //if disabled the errors will be shown in the minified code, what wil make your debbuging process harder
   //there are mutiple source maps available by default in webpack, and the 'source-map' one is the heaviest, but also the most precise
   devtool: 'source-map',
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   optimization: {
      minimizer: [new UglifyJsPlugin({
         //as the name suggests it removes it removes the comments from the application build
         //it can have a way more complex configuration in which you can filter what paths of
         //your app you want it to remove or preserve comments, make a regex to filter comments
         //and so on. In my case it wasn't necessary so i just set it to true (removes all comments)
         extractComments: true,
         //allows webpack to use mutiple cpu cores whilhe building. by default it uses os.cpus().length - 1
         //as the number of set cpus
         parallel: true,
      })],
         //removes unused exports using uglifyJS. Thats gives me freedom to import modules from which i'm only going to use one specific module
         //For example: in the neonTextComponent, where I import the Lighten funciton from polished
         usedExports: true,
    },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         },
         {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  disable: true
                },
              },
            ],
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};