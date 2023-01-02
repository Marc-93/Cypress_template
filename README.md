# Cypress test documentation

The selected code language is javascript using cypress as a test framework.

Features are typed using Gherkin due it is designed to facilitate the understanding of test scenarios between all team members.

## Requirements

* Browsers previously installed (chrome, firefox)
* npm
* Install package.json dependencies


## Technical details:

### Workspace structure

* Cypress: main path where all the tests are managed
   * features: test definition for each functionality
   * fixtures: test data to be reused in any functionality
   * support: extra commands
* node_modules: external packages installed for current project
* .gitignore: file where the patterns are defined to upload files in github
* cypress.config.js: cypress properties
* (WIP) setup with docker

## Reporting tools:

* (WIP)


## Test execution
* node_modules\.bin\cypress run --headed --browser firefox
