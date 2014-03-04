# angularjs-hello-world

Use the angular seed project (download the zip in your git repository)

install nodes packages

    npm install

install karma globally

    sudo npm install -g karma

install protractor & update

    npm install -g protractor
    sudo webdriver-manager update

install Google Chrome

## Launching the tests

Setup the appropriate Browser in config/karma.conf.js (see [Borwser](http://karma-runner.github.io/0.8/config/browsers.html) for more info)

Setup the url of the application in config/protractor-conf.js

### Launching unit test

    ./scripts/test.sh

### Launching e2e (recipe) tests

    ./scripts/e2e-test.sh