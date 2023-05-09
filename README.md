# Create React App Practice

## Core Concepts

Components:

- building block of React
- combines logic and presentation

Props:

- data passed to component
- immutable, cannot change its own property

> **Exporting:** Can export default value or by name

> **Importing:** If importing by name, must import using curly brackets.

# Styling JSX

- Use className instead of class for JSX as 'class' is a reserved word in JS.
- Conventional to add `className="Component"` onto each component and use as prefix for sub-items:

```
<div className="Home">
  <h1 className="Home-owner">{this.props.owner}</h1>
  <p className="Home-address">{this.props.address}</p>
  <p className="Home-value">{this.props.value}</p>
</div>
```

# React.Fragment

React will only return one parent element at a time, error will require adjacent elements to be wrapped in enclosing tag.

- React.Fragment prevents unnecessary tags, and can also be included with empty open and closing angle brackets.

```
<React.Fragment>
  <h1>Home Page</h1>
  <p>Welcome</p>
</React.Fragment>

OR

<>
  <h1>Home Page</h1>
  <p>Welcome</p>
</>
```

# DOM v React (Events)

- Adding inline event handlers, React events are camelCase v lowercase
- Can include args for events

```
DOM JS:
<button onclick="activate()">Activate</button>

React:
<button onClick={activate}>Activate</button>
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
