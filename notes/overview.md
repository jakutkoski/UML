Overview
========

# Explanation

The app was written in the AngularJS framework.
To test it, you need a Node.js server.
You also need npm and bower for installing dependent libraries.
After getting Node.js, npm, and bower,
follow the [installation instructions from the root README.](../README.md)

The `package.json` and `bower.json` files,
which are found in the root of this repository,
list the dependencies needed for this project.

All of the app code is located in the `app` directory:

### index.html

This is a single-page application, so there is only one index.html file.
It references the CSS, dependent libraries, and all of the JS we wrote.
You can generally ignore favicon.ico, 404.html, and robots.txt.

### views/

The `views` directory contains portions of HTML that make up the page.

### styles/

The `styles` directory contains CSS and fonts.

### images/

The `images` directory contains images for the app.
The yeoman.png image can be left there for development.

### scripts/

The `scripts` directory contains all of the custom JS for this application.

As a general overview of the scripts:

- The sinpfApp module is declared in `app.js`
- The `controllers/`:
  - TabsCtrl handles tab switching
  - InputCtrl handles user interaction for the input panel
  - GraphCtrl handles user interaction and updating the graph on the graph panel
- The `services/` that are injected into the controllers:
  - track.js defines the `track` service, which provides important variables to be tracked
  - utility.js defines the `utility` service, which provides useful utility functions used throughout the app
  - iteration.js defines the `iteration` service, which provides a function for calculating each iteration
  - graphing.js defines the `graphing` service, which provides functions to update the graph data
- Constants are also found in the `services/` directory:
  - umltable.js defines the `UMLtable` constant, which is an important lookup table used for calculations

# Building and testing

Running `grunt` builds a `dist/` folder with minified code.
This folder can be used for deployment to the server.

Running `grunt test` will run the unit tests with Karma.
This will create a `coverage/` folder, where you can see how much code is tested
by opening `coverage/**/index.html` in a browser.