const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports={
    /** "mode"
     * the environment - development, production, none. tells webpack 
     * to use its built-in optimizations accordingly. default is production 
     */
    
    /** "entry"
     * the entry point 
     */
    entry: "./src/index.js", 
    output: {
        /** "path"
         * the folder path of the output file 
         */
        path: path.resolve(__dirname, "dist"),
        /** "filename"
         * the name of the output file 
         */
        filename: "main.js"
    },
    /** "target"
     * setting "node" as target app (server side), and setting it as "web" is 
     * for browser (client side). Default is "web"
     */
  
   
    resolve: {
        /** "extensions" 
         * If multiple files share the same name but have different extensions, webpack will 
         * resolve the one with the extension listed first in the array and skip the rest. 
         * This is what enables users to leave off the extension when importing
         */
        extensions: ['.js','.jsx','.json'],
        alias: {
         '@components': path.resolve(__dirname, 'src/components/'),
         '@containers': path.resolve(__dirname, 'src/containers/'),
         '@pages': path.resolve(__dirname, 'src/pages/'),
         '@styles': path.resolve(__dirname, 'src/styles/'),
        },
    },
    module:{
        /** "rules"
         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
         * file inside of a require()/import statement, use the babel-loader to transform it before you 
         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
         * being searched"
         */
        rules: [
            {
                test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use:  'babel-loader' //loader which we are going to use
            },
            {
             test: /\.html$/,
             use: [
               {
                 loader: "html-loader",
               },
             ],
           },
           {
            test: /\.(css|scss)$/i,
            use: ['style-loader','css-loader','sass-loader'],
           }
        ]
    },
    plugins: [
     new HtmlWebPackPlugin({
       template: "./public/index.html",
       filename: "./index.html",
     }),
     new MiniCssExtractPlugin({
      filename: '[name].css',
     }),
   ],
   devServer: {
    historyApiFallback: true,
    /** "port" 
     * port of dev server
    */
    port: "9500",
    /** "static" 
     * This property tells Webpack what static file it should serve
    */
     static: {
      directory: path.join(__dirname, 'public'),
     },
    /** "open" 
     * opens the browser after server is successfully started
    */
    // open: true,
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only". 
     * "only" is used if enable Hot Module Replacement without page 
     * refresh as a fallback in case of build failures
     */
    // hot: true ,
    /** "liveReload"
     * disable live reload on the browser. "hot" must be set to false for this to work
    */
    // liveReload: true 
    compress: true,
   },
}