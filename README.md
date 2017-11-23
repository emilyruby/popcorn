# popcorn

My code for the Algolia full-stack application challenge.

## How to Run It

Clone this repository.

Run `npm install` in the both `app/` and `server/` directories to install the dependencies.

Export an `API_KEY` (with add and delete privileges) in your env with the command `export API_KEY='VALUE'`. This will then be used by the server when you run the application.

You can also modify the `APP_ID` and `API_KEY` in `app/src/algolia.js` if you wish to use your own application.

Go into the `app/` directory and run `npm run build` to build a minified and optimised version of the app to serve.

Go back to the root directory, and run the command `node server/app.js` and you should get the response `App is now listening on port 9000!`.

## Things I Would Change

* I would alter the structure of the application to be slightly better with the React Router.
* I would change some aspects of the design.
* Improve accessibility features of the site, especially regarding contrasts and alt strings for images, and tab navigation.
* Research how to trigger a new search using AlgoliaSearch after clearing the cache so that the results in the UI are dynamically updated when something is deleted.
* Modify the stars and form so that we work with score rather than rating, so it is more interesting than every movie having 3 stars!
* Not use Glamor as an alternative for Scoped CSS (something I'm very used to with Vue, but was playing with ways to do it with React- I think I would use Styled Components).
* I would highlight the information in the Hit which matched the query, and display more information about the film.

## Resources

* https://github.com/threepointone/glamor
* https://community.algolia.com/react-instantsearch/storybook/
* https://community.algolia.com/react-instantsearch/widgets/
* https://stackoverflow.com/questions/19713813/fade-image-to-transparent-like-a-gradient
* https://github.com/n49/react-stars
* http://fontawesome.io/icons/
* https://fonts.google.com/
* https://reactjs.org/blog/2017/04/07/react-v15.5.0.html
* https://reacttraining.com/react-router/web/example/animated-transitions
* https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
* https://coolors.co/
* https://reactjs.org/docs/state-and-lifecycle.html
* https://react-is-demo.glitch.me/
* https://stackoverflow.com/questions/38731271/clear-an-input-field-with-reactjs
* https://holy-emoji-search.glitch.me/
* https://github.com/tomchentw/react-toastr

## Learning Curves

Routing is slightly different in React than Vue as far as I can tell, as well as styling. It's much easier to scope styling in Vue. Components in React are declared in a very different way than I am used to, and are much less declarative and more closely tied to JavaScript which was something to get used to!
