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

* [Companies using Ember](http://brewhouse.io/images/posts/2015/05/companies.png)

## Usefull addons

    ember-cli-coffeescript
    ember-cli-sass
    ember-cli-mocha
    ember-cli-blanket (Code Coverage)
    ember-cli-sauce
    emberfire
    ember-cli-simple-auth
    liquid-fire
    ember-cli-deploy

* [Ember Addons](www.emberaddons.com)
* [Ember Observer](www.emberobserver.com)
    

## Implementation log

Prerequisite: nodejs and npm.
  
#### 1. Ember CLI

Install ember cli and bower:

    npm install -g ember-cli bower

#### 2. New app

Create a new ember-app

    ember new contacts-app

#### 3. Debugging options

Turn on a couple of debug option in `config/environment.js`

#### 4. Adding sass and bootstrap

[Ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) | [PR](https://github.com/szines/contacts-app-client/commit/9e04f9b71d76756907920ad0ad9df2878b5982a1)

    npm install --save-dev ember-cli-sass
    mv app/styles/app.css app/styles/app.scss

[Ember-cli-bootstrap-sassy](https://github.com/lifegadget/ember-cli-bootstrap-sassy) | [PR](https://github.com/szines/contacts-app-client/commit/487da30d9a32134e8078ea7a41ae233d59f96b57)

    ember install ember-cli-bootstrap-sassy
    cp bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss app/styles/boostrap-custom.scss
    #Add the following two lines to app/styles/app.scss
    @import "boostrap-custom";
    @import "bootstrap";

#### 5. Creating navigation component

Add `main-nav` component (could be partial as well). Note: a component name has to contain a dash. | [PR](https://github.com/szines/contacts-app-client/commit/101629f49533b764153ccfad09f272e2e93bcc53) | [Bootstrap example](http://getbootstrap.com/examples/navbar-static-top/)
  
#### 6. Creating a static page and using link-to

Add `About` page: router.js, main-nav.hbs with `link-to`, index.hbs, about.hbs, `link-to` on logo | [PR](https://github.com/szines/contacts-app-client/commit/7cdb33bdd1605df6ef646c69d68a4fcf71d081c3)

#### 7. Generating the first resource (model)

Generate `Contacts` resource: `ember g resource contacts`, add `link-to` to main-nav.hbs, add header to contacts.hbs | [PR](https://github.com/szines/contacts-app-client/commit/6f0439e2c1d710910ab8401827079be0f3e21fca)

Add a simple array to routes/contacts.js and show this list in template. | [PR](https://github.com/szines/contacts-app-client/commit/7bf95eca6e555efd17caf76804aab92a4ce0c989)

Add a simple show/hide button to template. | [PR](https://github.com/szines/contacts-app-client/commit/f49c41b1ebe6005657bfb59470cf593f08034aee)

* ember g controller contacts
* Add isShowingPhoneNumber property
* Add #if block to template
* Add button to template
* Add actions to controller

Binding class attributes and button label. Using ES6 function property syntax. | [PR](https://github.com/szines/contacts-app-client/commit/53686f18b89df1a6bac506fd0f01bcb7b7ef2b5f)

#### 8. Ember Data and Usage of LocalForage Adapter

Adding LocalForage Adapter. (ember-localforage-adapter)[https://github.com/genkgo/ember-localforage-adapter]

    ember install ember-localforage-adapter
    ember generate adapter application

Add createRecord action to contacts controller | [PR](https://github.com/szines/contacts-app-client/commit/30a4f2f204b29a46d74410d1330b81f173e2c643)

Add deleteRecord and add checking of empty input fields | [PR](https://github.com/szines/contacts-app-client/commit/278b09969554f63cf727b844ecc8a341150a0d5e)

#### 9. Adding bulk data generator and updating Ember

Adding two buttons (bulk data generator and Delete All). Update Ember.js. | [PR](https://github.com/szines/contacts-app-client/commit/9633a42d609d96044a5c70b57a2e6c1318984ace)

#### 10. Heroku deployment

* More details: http://www.ember-cli.com/#deployments
* Buildpack link: https://github.com/tonycoco/heroku-buildpack-ember-cli

#### 11. Firebase database service integration

* Instruction on Firebase website. [Firebase with ember-cli](https://www.firebase.com/docs/web/libraries/ember/guide.html)


    ember install emberfire

    
* Configure your firebase URL in `config/environment.js`.

* Note: Firebase works well with Ember Data version: 1.0.0-beta.19.2

### 12. Loading phase

* Create a `loading.hbs` in template folder. It appears while Promise has been resolved: data downloading from server in the background.
