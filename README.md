# dawg-finder

This is a web application where you can get help find the perfect dog, built with create-react-app and typescript. Project includes components, some of them are stateful.

****************************************************************************

** LAY OUT THE PROJECT **

Let’s start out with a new directory. We’ll name it proj for now, but you can change it to whatever you want.

mkdir proj
cd proj
To start, we’re going to structure our project in the following way:

proj/
├─ dist/
└─ src/
   └─ components/

TypeScript files will start out in your src folder, run through the TypeScript compiler, then webpack, and end up in a main.js file in dist. Any components that we write will go in the src/components folder.

Let’s scaffold this out:

mkdir src
cd src
mkdir components
cd ..

Webpack will eventually generate the dist directory for us.

** INITIALIZE THE PROJECT **
Now we’ll turn this folder into an npm package.

npm init -y
This creates a package.json file with default values.

** INSTALL OUR DEPENDENCIES **
First ensure Webpack is installed.

npm install --save-dev webpack webpack-cli
Webpack is a tool that will bundle your code and optionally all of its dependencies into a single .js file.

Let’s now add React and React-DOM, along with their declaration files, as dependencies to your package.json file:

npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom

Next, we’ll add development-time dependencies on the ts-loader and source-map-loader.

npm install --save-dev typescript ts-loader source-map-loader

** ADD A TYPESCRIPT CONFIGURATION FILE **
You’ll want to bring your TypeScript files together - both the code you’ll be writing as well as any necessary declaration files.

To do this, you’ll need to create a tsconfig.json which contains a list of your input files as well as all your compilation settings. Simply create a new file in your project root named tsconfig.json and fill it with the following contents:

{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
  }
}

** WRITE SOME CODE **
Let’s write our first TypeScript file using React. First, create a file named Hello.tsx in src/components and write the following:

import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

** CREATE A WEBPACK CONFIGURATION FILE **
Create a webpack.config.js file at the root of the project directory.

module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};

** PUTTING IT ALL TOGHETER ** 
Just run:

npx webpack

Now open up index.html in your favorite browser and everything should be ready to use! You should see a page that says “Hello from TypeScript and React!”

REACT WEBPACK AND TYPESCRIPT GUIDE
https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

****************************************************************************

** DEMO **
https://emmamariagaby.github.io/dawg-finder/

** REPO **
https://github.com/emmamariagaby/dawg-finder
