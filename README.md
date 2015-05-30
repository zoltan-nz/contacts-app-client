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

* Add `main-nav` component. Note: a component name has to contain a dash.

* Add `About` page: router.js, main-nav.hbs with `link-to`, index.hbs, about.hbs, `link-to` on logo

* Generate `Contacts` resource: `ember g resource contacts`, add `link-to` to main-nav.hbs, add header to contacts.hbs

* Add a simple array to routes/contacts.js and show this list in template.

* Add a simple show/hide button to template.


    ember g controller contacts
    Add isShowingPhoneNumber property
    Add #if block to template
    Add button to template
    Add actions to controller

* Binding class attributes and button label. Using ES6 function property syntax.
