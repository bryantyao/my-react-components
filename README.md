# bryantyao.github.io-dev
Hey there, welcome to Bryant Yao's GitHub page's development repo!

This repo contains the source for [my website](https://bryantyao.github.io) and also has it's own [page](https://bryantyao.github.io/bryantyao.github.io-dev) for any changes I'm testing out.

## What's in here?
* My website's source code
* Build tooling that I created to deploy to either my development or production website.

## Getting Started
### Developing Locally
1. Download the source code
2. Run `npm install`
    * This installs all of the project's dependencies
3. Run `npm run start`
    * This starts up a local server that runs the code. It'll open up your website in the browser and the website will auto-refresh any time you make a change to a file.
4. Go make some changes!

### Deploying the code
*Note: The deploy code is hardcoded to my URLs*
* Development: `npm run deploy`
  * Deploys to the `gh-pages` branch of this repo
* Production: `npm run deploy:production`
  * Deploys to the `master` branch of my website's repo
  * By default, it creates a new minor release (by auto-incrementing the minor number from the last release)
    * This can be changed by using RELEASE=major or RELEASE=fix.

## PAQ (Potentially Asked Questions)
### Why React?
My main motivations for using React are:
* Just for fun! I wanted a chance to build something very simple with React to get my feet wet.
* I wanted to try out the new ES6 JavaScript syntax and play around with some of the NPM ecosystem.
* I wanted to see how I would componentize my own website using ES6 classes.

So while it's true that my website could be built using pure HTML/CSS or a static-site generator like Jekyll, I definitely wanted to go the React route.

### Why two repos?
While I do have a local development server to work on, having a development repo with its own GitHub page is like having a staging environment. It allows me to verify that my changes won't break in an actual production environment.

