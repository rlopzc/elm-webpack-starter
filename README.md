# elm-webpack-4-starter

### About:
A Webpack 4 setup for writing [Elm](http://elm-lang.org/) apps:

* Dev server with live reloading, using HMR
* [Webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard) to have more info about the dev-server
* [Elm Analyse](https://github.com/stil4m/elm-analyse). Tool to identify Elm code deficiencies and best practices
* Support assets
  * Images
  * CSS/SCSS
    * PostCSS with Autoprefixer
    * [PurifyCSS](https://github.com/purifycss/purifycss) to remove unused CSS
    * CSS minification
* Bootstrap 4.1 (Sass version)
* Bundling and minification for deployment with [compressed version of assets](https://github.com/webpack-contrib/compression-webpack-plugin) (gzip)
* Examples (examples/)
  - Hello world
  - Counter
* App scaffold using Richard Feldman [RealWorld example app](https://github.com/rtfeldman/elm-spa-example) and this [template](https://github.com/simon-larsson/elm-spa-template).
* [Webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to visualize the outputted files


### Requirements:
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- Node >= v6.11

### Install:

Clone this repo into a new project folder, e.g. `my-elm-project`:
```
git clone https://github.com/romariolopezc/elm-webpack-4-starter my-elm-project
cd my-elm-project
```

Re-initialize the project folder as your own repo:
```
rm -rf .git
git init
git add .
git commit -m 'initial commit'
```

Install all dependencies using the handy `reinstall` script:
```
yarn reinstall
```
*This does a clean (re)install of all npm and elm packages, plus a global elm install.*


### Serve locally:
```sh
yarn dev
```
* Access app at `http://localhost:8080/`
* Get coding! The entry point file is `src/elm/Main.elm`
* Browser will refresh automatically on any file changes, including css.

To analyse your elm code, look for deficiencies and apply best practices, use:
```sh
yarn elm-analyse
```
* Access the web client at `http://localhost:3000`

### Build & bundle for production:

There are presets related to production.
Presets:
  - `compress`: Use WebpackCompressionPlugin
  - `analyze`:  Use WebpackBundleAnalyzer

```sh
$ yarn prod
$ yarn prod:<preset>
$ yarn prod:compress
$ yarn prod:analyze
```
You can add your own presets to test functionality without breaking the working build.

* Files are saved into the `/dist` folder
* To check it, open `dist/index.html`

### Contributing
- PR's welcome :)

### Notes
* This webpack template was heavily inspired in the Elm Community [elm-webpack-starter](https://github.com/elm-community/elm-webpack-starter).
* The webpack build-utils and preset pattern was taken from the FrontendMasters course [Webpack fundamentals](https://frontendmasters.com/courses/webpack-fundamentals/)
* If jQuery not needed, delete Popper.js and jQuery from webpack.config.js
