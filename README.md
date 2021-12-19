# How to run

There are two applications to run here.

First, in the top level directory, run `yarn start` to run the front end.

Then run the server by running `yarn start` from the server directory.

You should then be able to enter data and submit it using the Save & Continue button. This will send a POST to the server, which will return the data and display it in the console. There is a manufactured delay for the server to respond so the loading animation is visible on the button.

Validations that will occur:
1. Mailing address is required
2. City is required
3. State is required
4. Zip code is required and must be a valid code of either 12345 or 12345-6789 format
5. Mobile number is required and must match a common phone format (i.e. 123-456-7890, (123)456-7890, etc.)

---

## CRA - Getting Started Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## CRA - Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
