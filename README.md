# Front End code challenge for Dungeons & Dragons 5th Edition API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project description

### Requirements

• Display a list of all spells \
Spells are displayed on vanilla way, without pagination which could be added, but since idea behind this coding test is
simple, functionalities are simple, and displayed data are simple, pagination is not mandatory.
Unordered list of spells contains links to "spell detail page" as list items. Click on the links within this list is the
only way for checking a details for specific spell, and consequently, the only way to put specific spell in favourites.

• Allow the user to view information related to each spell \
The idea was to use some nice style resource and add functional requirements within existing elements of the chosen
resource.\
Spell details are displayed in card styled
via [using this style](https://codeburst.io/make-a-magic-the-gathering-card-in-css-5e4e06a5e604).
Every spell card contains a "heart button" at the bottom, which is provided with the goal of adding currently displayed
spell to favourites.

• Allow the user to save spells to a list of favourites \
List of favourites is a list of 'spell cards' with full spell details. Spell could be removed from favourites only
via [favourites page](http://localhost:3000/favs).
Additionally, information about which spell is considered as favourite is also available from
the [main spell list display](http://localhost:3000/spells) where a heart icon is displayed near spell name.

### Solution repo

https://github.com/jelaB/dnd

### Project dependencies

Install [Node.js](https://nodejs.org/en/download/), and install yarn using [npm package manager](https://www.npmjs.com/)
which comes bundled with Node.js when you install it on your system.  
yarn install instruction: `npm install --global yarn`

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

