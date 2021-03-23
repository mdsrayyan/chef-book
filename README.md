# Chef Book

- [Chef Book](#chef-book)
- [Introduction](#introduction)
- [Installation](#installation)
  - [Local installation](#local-installation)
- [API](#api)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Useful Commands](#useful-commands)
- [Environment](#environment)
  - [Development server](#development-server)
  - [Build](#build)
  - [Running unit tests](#running-unit-tests)
- [Supported Browsers](#supported-browsers)
- [Possible improvements](#possible-improvements)

# Introduction

This is a simple and personalized recipe book.

This app consists of following features. 

User can:
1. Add, Delete and Edit recipes to the book.
2. Can bookmark recipes for future reference.
3. Can filter on the different categories of recipes available
4. Can search for specific recipe.
5. Can upload the images for the recipe

# Installation

## Local installation

- Clone this repo using `https://github.com/mdsrayyan/chef-book.git`
- Run `npm ci` for a clean install.
- Run `npm start` to start application in your local machine.
- Open chrome and navigate to `http://localhost:4200`

# API

This project makes use of

1. Firebase to fetch the data and images required



# Project Structure

- This project structure is well suitable for enterprise level applications to small scale applications.
- Configured with latest tslint rules
- Husky is in place to check linting for every commit
- Equipped with code snippets to help developers to ease the process of documentation
- Project uses material for UX (opiniated)
- Uses NgRx store to communicate between components easily.
- Uses Flex to make sure the application in responsive enough

# Deployment

Before deployment, Husky scripts check for linting. Not meeting the check wont let you to push the code to repo.
After the successful check, code will be pushed to the corresponding branch in github and automatic scripts are in place to deploy it to netlify.

check live app after deployment [here](https://chef-book-demo.netlify.app)

# Documentation

Latest Documents will be available [here](https://fedex-signup-docs.netlify.app/)

# Useful Commands

Run `ng g c my-component` to generate a new component.
Run `ng g module my-component` to generate a new component.
Run `ng g service my-component` to generate a new component.
Run `npm run generate:Docs` to generate docs.
Run `npm run update` to update to latest version.


# Environment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Supported Browsers

1. Chrome
2. Edge
3. Firefox

# Possible improvements

1. Unit test case coverage could have been done, But due to time constrain it wasn't. You can always look for other projects in my repo for reference. 
2. Rich text support for user to make editing a little easier.
3. Form control name is used instead of form control to avoid strict type issues.
4. Could have used NgRx store more to store previous searches and store latest visited recipes.
5. Could have written e2e test cases

