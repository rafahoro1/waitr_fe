# waitr-FE

## What is this?
This is an implementation (front-end part) of the [coding_challenge.md](https://github.com/WaitrInc/coding-challenge/blob/master/coding_challenge.md)

See also the README.md file on [waitr-be](https://github.com/rafahoro1/waitr_be) project.

## Build & development
First all, install the dependencies:

 - npm install
 - bower install


Run `grunt` for building and `grunt serve` for preview.

Note: the FrontEnd has hardcoded some Driver values, and assumes the DB (backend) has those drivers too. So, please run **npm run mock** on the backend before starting the frontend.


## Implementation

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular) version 0.16.0.

On the git repository, the initial commit is all generated code. Other commits that were made from generated code, states so too.


## Testing

Running `grunt test` will run the unit tests with karma. 


## ToDo

 The frontend is really minimal. Here are some ToDos, although the list should be quite longer.
  
 - The spinner is just a 'loading' text. It should be an image that hiddes all other elements
 - A back button or some kind of navigation may help (altough you can just use the browser's back button)
 - Better tests
 - Take values from some config file or the environment, to allow easier deployment (currently in services/contants.js)
 - Althoug bootstrap does a good job, the UI can be improved
 - I18N (or at least remove the hardcoded messages from the code)
 - Better error handling/prevention currently you can 'submit' an empty review, and no warning message is shown. Although no post is made to the BE.

