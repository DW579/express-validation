## Objectives

* Be able to check for valid user input
* Be able to extract validation functions out of routes
* Be able to display validation errors to user
* Be able to execute Test Driven Development

## Set Up

__if you haven't previously used mocha__
```ssh
npm install -g mocha
```

```ssh
 npm install
 nodemon
```

## Overview

Your mission is to be able to validate user input, server side.

__Your routes should:__

* Not have validation logic inside of them
* Import validation functions from a lib/validations.js file
* re-render the page when user input is invalid
* res.send("You are so valid") when user input is valid

## How to Submit

When all tests are passing:

* Deploy to Heroku
* Add Heroku URL to top of this README
* Submit pull request
