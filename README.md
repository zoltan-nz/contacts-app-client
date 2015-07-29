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

[Ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) | [Commit](https://github.com/szines/contacts-app-client/commit/9e04f9b71d76756907920ad0ad9df2878b5982a1)

    npm install --save-dev ember-cli-sass
    mv app/styles/app.css app/styles/app.scss

[Ember-cli-bootstrap-sassy](https://github.com/lifegadget/ember-cli-bootstrap-sassy) | [Commit](https://github.com/szines/contacts-app-client/commit/487da30d9a32134e8078ea7a41ae233d59f96b57)

    ember install ember-cli-bootstrap-sassy
    cp bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss app/styles/boostrap-custom.scss
    #Add the following two lines to app/styles/app.scss
    @import "boostrap-custom";
    @import "bootstrap";

#### 5. Creating navigation component

Add `main-nav` component (could be partial as well). Note: a component name has to contain a dash. | [Commit](https://github.com/szines/contacts-app-client/commit/101629f49533b764153ccfad09f272e2e93bcc53) | [Bootstrap example](http://getbootstrap.com/examples/navbar-static-top/)
  
#### 6. Creating a static page and using link-to

Add `About` page: router.js, main-nav.hbs with `link-to`, index.hbs, about.hbs, `link-to` on logo | [Commit](https://github.com/szines/contacts-app-client/commit/7cdb33bdd1605df6ef646c69d68a4fcf71d081c3)

#### 7. Generating the first resource (model)

Generate `Contacts` resource: `ember g resource contacts`, add `link-to` to main-nav.hbs, add header to contacts.hbs | [Commit](https://github.com/szines/contacts-app-client/commit/6f0439e2c1d710910ab8401827079be0f3e21fca)

Add a simple array to routes/contacts.js and show this list in template. | [Commit](https://github.com/szines/contacts-app-client/commit/7bf95eca6e555efd17caf76804aab92a4ce0c989)

Add a simple show/hide button to template. | [Commit](https://github.com/szines/contacts-app-client/commit/f49c41b1ebe6005657bfb59470cf593f08034aee)

* ember g controller contacts
* Add isShowingPhoneNumber property
* Add #if block to template
* Add button to template
* Add actions to controller

Binding class attributes and button label. Using ES6 function property syntax. | [Commit](https://github.com/szines/contacts-app-client/commit/53686f18b89df1a6bac506fd0f01bcb7b7ef2b5f)

#### 8. Ember Data and Usage of LocalForage Adapter

Adding LocalForage Adapter. (ember-localforage-adapter)[https://github.com/genkgo/ember-localforage-adapter]

    ember install ember-localforage-adapter
    ember generate adapter application

Add createRecord action to contacts controller | [Commit](https://github.com/szines/contacts-app-client/commit/30a4f2f204b29a46d74410d1330b81f173e2c643)

Add deleteRecord and add checking of empty input fields | [Commit](https://github.com/szines/contacts-app-client/commit/278b09969554f63cf727b844ecc8a341150a0d5e)

#### 9. Adding bulk data generator and updating Ember

Adding two buttons (bulk data generator and Delete All). Update Ember.js. | [Commit](https://github.com/szines/contacts-app-client/commit/9633a42d609d96044a5c70b57a2e6c1318984ace)

#### 10. Heroku deployment

* More details: http://www.ember-cli.com/#deployments
* Buildpack link: https://github.com/tonycoco/heroku-buildpack-ember-cli

#### 11. Firebase database service integration

* Instruction on Firebase website. [Firebase with ember-cli](https://www.firebase.com/docs/web/libraries/ember/guide.html)


    ember install emberfire

    
* Configure your firebase URL in `config/environment.js`.

* Note: Firebase works well with Ember Data version: 1.0.0-beta.18

### 12. Loading phase

* Create a `loading.hbs` in template folder. It appears while Promise has been resolved: data downloading from server in the background. | [Commit](https://github.com/szines/contacts-app-client/commit/f9fe701bf1a21bc8fa7409e5702ca8b2df9b1cc2)

### 13. Add a query param

* More details about query-params: [Guide](http://guides.emberjs.com/v1.12.0/routing/query-params/) | [Commit](https://github.com/szines/contacts-app-client/commit/666a8cccd53f72ba1edf3631699d3d3fa075c041)

### 14. Playing with Computed Properties

* Change `and` to `or` at validation.
* Add email attribute to contact model.
* Add computed property for counting records with email addresses.

### 15. Clean up controller with components

* [Official guide about Components](http://guides.emberjs.com/v1.12.0/components/)
* Generate `contacts/add-contact-form` component with the following ember command: `ember g component contacts/add-contact-form`
* Move all form related html code from `templates/contacts.hbs` in `templates/components/contacts/add-contact-form.hbs`
* Insert in `templates/contacts.hbs` the one liner component code: `{{contacts/add-contact-form}}`
* Move model modifier actions from controller to route.
* Create action in component and send action with params to higher level route action.
* Change computed properties for using the new preferred syntax.
* [Connected commit](https://github.com/szines/contacts-app-client/commit/0826f92f8de512521b40dd790e037c941ab2558c)

### 16. Create a phone-input component

* Create a phone-input component which extend from Ember.TextInput
* Add an observer with regular expression which accept only numbers and insert dash after each third digit.

### 17. Update Ember Data fetching method

* Using `.findAll('contact')` for downloading contacts.
* Data downloading in the backtround, `model.isUpdating` is `true` until all data downloaded.
* Update template with showing different message during data download. [Commit](https://github.com/szines/contacts-app-client/commit/cc4955e8b5be3d90a5686d7dd2931233332b62b3)

### 18. Move table and table rows in separated components

* Remove showingPhoneNumber toggle.
* Create `contact-table` and `contact-row` component and move html and logic there from main contacts template and controller. [Commit](https://github.com/szines/contacts-app-client/commit/30d7626626f682e48a64c98577cc0c26d332b126)

### 19. Implement Boostrap modal window for Delete confirmation

* Create `modal-dialog` component
* Insert `modal-dialog` in `contact-row`
* [Commit](https://github.com/szines/contacts-app-client/commit/485d30527c3e59229377704b01bfc41c7d1598cb)

### 20. Move the form in a contacts/new page

* Add a new nested route to `app/router.js`
* Create a `contacts/new.hbs` and `contacts/new.js` controller.
* Move index content to `contacts/index.hbs`.
* Add {{outlet}} to `contacts.js`
* [Commit](https://github.com/szines/contacts-app-client/commit/52fe4739353ca0d500cbf4b38b8b2411bee9d45f)

### 21. Create a contacts/show route, template

* Add a new nested route to `router.js`
* Create component, template for `show` route.
* [Commit](https://github.com/szines/contacts-app-client/commit/64286b835229e071c70faa9bd63638580226dfa9)

### 22. Refactor contact-form component and using in create, edit and show route

* Create and edit route in `router.js`
* Create the new universal component `app/components/contacts/contact-form.js`
* Delete old components
* Update route models and actions
* Update css
* [Commit](https://github.com/szines/contacts-app-client/commit/fde24d8b1819ad369fba83e43c11fa20cbdbd0d1)

### 23. Update Firebase and add authentication

Readings:
 
* https://www.firebase.com/blog/2015-07-28-emberfire-1-13-0.html
* http://vestorly.github.io/torii/
* https://www.firebase.com/docs/web/libraries/ember/guide.html#section-authentication

Steps:

* Run in console: `ember install emberfire` - Update adapter, bower.json and package.json
* Run in console: `ember install torii`
* Add this to `config/environment.js`
```
    torii: {
      sessionServiceName: 'session'
    },
```
* Add `torii-adapters/application.js` for service injection.
* Create actions in `application.js` and template in `application.hbs` 

