This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tour Of Avengers

### About 

A project made to learn and grasp the core concepts of react and its ecosystem.To make the learning a bit fun, MCU's Avengers has been choosen.<br>
I have tried to implement most of the core React concepts in this project, however there are still more to be done. Following are some information regarding the app : <br>

1) App uses the React-router and has 4 major routes.
2) The app simulates the data being fetched from server. This is a complete client side based app having no server involved.
3) The app contains the data of 10 avengers. More avenger can be added. However, that added data will be available only untill the browser is refreshed.
4) The styling has been kept minimum as it was more about implmenting react. For styling, css variables (which is one of the new features on web) has been used in order to just give it a try.
5) Build process has been customized a bit to reduce the repeatitive task. After the normal build process (which is run using 'npm run build'), a custom script copies the content of index.html generated in /build folder to a file 404.html in the same /build folder. It has been done to handle the browser refresh when app is loaded on a hosting service like github pages. The server returns the 404.html file as it does not recognize the client side routing. Morever two npm scripts : 'predeploy' and 'deploy' has been used to cover the whole process of building to deployment via a single command.

### Future Additions and improvements

1) Extend the app by adding a couple of more features.
2) Also implement the server side logic so that the new avengers added or edited can be persisted in the database.
3) Use Saas to speed up the styling and integrate it with the build flow.
4) Use Typescript in order to catch errors while developing and increase the developer productivity by leveraging the editor tools.
4) Use Redux to manage the state of the app.
5) Write some test scripts.


### `npm deploy`

A single command to build, create 404.html page in build folder, and deploy to github pages. 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
