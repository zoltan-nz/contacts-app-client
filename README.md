# contacts-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### Implementation log

* Turn on a couple of debug option in `config/environment.js`

* [Ember-cli-sass](https://github.com/aexmachina/ember-cli-sass)
  
  
    npm install --save-dev ember-cli-sass
    mv app/styles/app.css app/styles/app.scss

* [Ember-cli-bootstrap-sassy]()


    ember install ember-cli-bootstrap-sassy
    cp bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss app/styles/boostrap-custom.scss
    
    Add the following two lines to app/styles/app.scss
    @import "boostrap-custom";
    @import "bootstrap";

