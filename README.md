# Coffee-Counter

By Neil Lupton

Written for LinkedIn course React.js Essential Training

## Requirements

Build an activity counter, tallying up the number of times you've completed an activity.
The activity should have a location, a date, and two optional boolean fields.

For this I've chosen a coffee counter, storing the date purchased, which coffee shop, whether it was takeaway, and if any cake was bought.

The application will be built using React, with React Router.
The build will be handled by Webpack, using Webpack Dev Server to test while developing.

## Extras

* Added eslint processing to automatically format code (with VS Code option eslint.autoFixOnSave)
* Upgraded to React v16, webpack v3, React router v4
* Added shortid to have unique values for each row
* Added Goal progress bar and ability to set goal
* Use local storage to store entered records

## Installation Instructions

1. Clone locally using:

    `git clone https://github.com/Neil188/Coffee-Counter.git`

2. Install dependencies:

    `npm install`

3. Run build using:

    `npm run build`

    App can then be run from public/index.html

    Or run webpack dev server:

    `npm run dev-server`

    and view the project in the [browser](http://localhost:3000/)

## Technologies used

Built on:

* Node v9.8.0
* npm v5.6.0
* React v16
* React Router DOM v4.2
* Webpack v3.10