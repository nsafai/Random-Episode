# Random (Netflix) Episode
A React website that generates and links a random Netflix episode of the series of your choice, thereby eliminating indecision paralysis. 

## How to try it
The app is now live and you can use it at: [randomnetflix.com](https://www.randomnetflix.com/)

![Screenshot of Random Episode 1](/random-ep-1.png)
![Screenshot of Random Episode 1](/random-ep-2.png)

## Technologies
React.js, JSX, JavaScript, MovieDB API

## Milestones
- [x] Feb 19: Choose idea
- [x] Feb 20: Wireframes
- [x] Feb 25: Episode component
- [x] Feb 26: Watch + New Episode button
- [x] Mar 1: Stretch goal: integrate with MovieDB and pull episode data like Img
- [x] Mar 3: Launched live: https://random-ep.herokuapp.com/
- [x] Stretch goal 2: re-factor to support other shows and add an index page
- [ ] Stretch goal 3: launch other shows to production

## Available Scripts
- `yarn` or `yarn install` to install all requires dependencies locally
- `yarn start`: Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn build`: Builds the app for production to the `build` folder.<br>
  - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.<br>
  - Your app is ready to be deployed!
  - See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Required ENV variables
- `REACT_APP_MOVIEDB_KEY`: To use the [MovieDB API](https://www.themoviedb.org/0)

## Credits
- The concept for finding the URL for the episode on netflix was inspired by [ blog article](https://techroose.com/tech/episodeGenerator.html)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Other shows to add (by request)
- [x] The Office
- [ ] How I met your mother
- [ ] Gilmore Girls
- [ ] Parks and Rec