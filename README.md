# elm-webpack-4-starter

### [Demo](https://elm-webpack-4-starter.netlify.com/)

## About

A Webpack 4 setup for writing [Elm](http://elm-lang.org/) apps:

* Webpack optimized Elm production code with TerserJS [Here](https://github.com/romariolopezc/elm-webpack-4-starter/blob/master/build-utils/webpack.production.js#L41)
* Webpack dev server with [Elm Hot Loader](https://github.com/klazuka/elm-hot-webpack-loader).
* [Webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard) to have more info about the dev-server
* [Elm Analyse](https://github.com/stil4m/elm-analyse). Tool to identify Elm code deficiencies and best practices
* Support assets
  * Images
    * Automatic Compression of images copied by `copy-webpack-plugin`
  * CSS/SCSS
    * PostCSS with Autoprefixer with Autoprefixer support for the latest Browsers (defined in `package.json`)
    * [PurifyCSS](https://github.com/purifycss/purifycss) to remove unused CSS
    * CSS minification
* Bootstrap 4 (Sass version)
* Bundling and minification for deployment with [compressed version of assets](https://github.com/webpack-contrib/compression-webpack-plugin) (gzip)
* Examples (examples/)
  * Hello world
  * Counter
* App scaffold using Richard Feldman [RealWorld example app](https://github.com/rtfeldman/elm-spa-example)
* [Webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) to visualize the outputted files

## Requirements

* [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* Node >= v6.11
* [Elm](https://guide.elm-lang.org/install.html)

## Install

Clone this repo into a new project folder, e.g. `my-elm-project`:

```sh
git clone https://github.com/romariolopezc/elm-webpack-4-starter my-elm-project
cd my-elm-project
```

Re-initialize the project folder as your own repo:

```sh
rm -rf .git
git init
git add .
git commit -m 'initial commit'
```

Install all dependencies using this commands:

```sh
yarn install
```

*This does a clean install of all npm packages.*
*Elm packages are automatically installed by doing `yarn dev` or `yarn prod`*

## Serve locally

```sh
yarn dev
```

* Access app at `http://localhost:8080/`
* Get coding! The entry point file is `src/elm/Main.elm`
* Browser will refresh automatically on any file changes, including css
* Elm app is going to preserve the state on each refresh

To analyse your elm code, look for deficiencies and apply best practices, use:

```sh
yarn elm-analyse
```

Access the web client at `http://localhost:3000`

### Path based routing

For Path based routing look at [this](https://github.com/romariolopezc/elm-webpack-4-starter/pull/44)

## Build & bundle for production

There are presets related to production.
Presets:

* `compress`: Use WebpackCompressionPlugin
* `analyze`:  Use WebpackBundleAnalyzer

```sh
yarn prod
yarn prod:<preset> # <- This is the pattern for the presets, defined in package.json
yarn prod:compress
yarn prod:analyze
```

You can add your own presets to test functionality without breaking the working build.

* Files are saved into the `/dist` folder
* To check it, open `dist/index.html`

## Deploying the App

To deploy our app, we are going to use the free service (for personal use) [Netlify](https://www.netlify.com/)

You can automatically deploy this template with this button

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/romariolopezc/elm-webpack-4-starter)

### Features on Netlify

* Automatic SSL Certificate
* Serves gzipped files from our build ;)
* Continuous deployment on selected Branches with preview

### Steps

1. Create an account [here](https://app.netlify.com/signup)
2. Download the CLI `$ yarn global add netlify-cli`
3. Login `$ netlify login` and it will open the browser for you to authorize the CLI
4. Deploy your site with `$ netlify deploy --prod`
    * Choose `Create & configure new site`
    * Choose a site name or leave it blank for random name
    * Choose your account
5. Open the `Live URL` from the command output
6. Site live and ready.

#### Continuous Deployment

If you want CD (Continuous Deployment), learn more on how to configure Netlify [here](https://www.netlify.com/docs/continuous-deployment/)

For CD:

1. Run `$ netlify open` to go to your deployed site configuration
2. Go to Settings -> Build & deploy. Click `Link site to Git`
3. Link your github/gitlab account and choose your repo
4. Choose your branch for CD
5. Leave `Basic build settings` as it is (we have the configuration in root `netlify.toml`)
6. Click `Deploy site`

## Contributing

PR's welcome :)

## Notes

* This webpack template was heavily inspired in the Elm Community [elm-webpack-starter](https://github.com/elm-community/elm-webpack-starter).
* The webpack build-utils and preset pattern was taken from the FrontendMasters course [Webpack fundamentals](https://frontendmasters.com/courses/webpack-fundamentals/)
* If Bootstrap JS not needed, delete it from `src/assets/presets/vendor.js`
