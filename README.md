# Webpack 5 project

## Summary
- [x] Webpack setup
- [ ] babel
- [ ] sourcemaps
- [ ] CSS, PostCSS, sass/scss
- [ ] HMR (Hot module Reload)
- [ ] browserlist
- [ ] React with JSX,TSX
- [ ] Images
- [ ] Auto HTML
- [ ] React Fast Refresh

## What we'll build
We are going create a new Webpack 5 project, putting it on Github, and adding all the parts we need as we go. By the end we'll have a Single Page App (SPA) setup that is hosted with some basic continuous integration (CI) so that every time we push, or make a pull request, to the main branch our site automatically updates. 

We'll be covering a ton of common functionalities needed in a Webpack project such as: 
- Babel and @babel/preset-env for modern JavaScript transpiling.
    - babel-loader
    - @babel/core
    - @babel/preset-env-plugin
 
- CSS, PostCSS with postcss-preset-env for CSS fallbacks for better cross-browser support (may be SCSS).
  
-  Browserslist config for customizing the browsers you want to support for JS and CSS, all in one place. 

- Outputting all CSS to a file with mini-css-extract-plugin

- HTML templates with html-webpack-plugin

- Cleaning the output folder every build with clean-webpack-plugin

- React with the new automatic importing functionality supported in React 17+ through Babel.

- React Fast Refresh in Webpack: the new hot module loading tool supported by the React team.

- Outputting or bundling images with the new Webpack 5 Asset Module type.

- *Quickly getting your app/site hosted on Netlify.
