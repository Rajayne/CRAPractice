# Create React App Practice

## Core Concepts

Components:

- Building block of React
- Combines logic and presentation

Props:

- Data passed to component
- Immutable, cannot change its own property

State:

- Data specific to component
- Can change

Keys:

- List items need unique key identifiers
- Avoid using index as keys

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

# Hooks

## useRef

- Returns mutable object with key of `current` whose value is equal to the intial value passed into the hook
- Object persists across renders (like a local variable but independent of state)
- Mutating the object does not trigger a re-render

## useEffect

Runs "side effects"

- useEffect(callback, array)
- cannot be an async function, must define async function inside useEffect then invoke
- Dependencies array

  > **Side Effects:**fetching data, starting a timer, changing DOM

## useState

const [data, setData] = useState(initialState)

- data = returned state / variable
- setData = function to update state / data
- initialState = set initial value of data

State is used for:

- Hiding or showing data (toggling)
- Fetching data from API
- Themes, colors or styles that change based on event

### Changing State

State

```
function Counter() {
  const [num, setNum] = useState(0)

  const increment2 = () => {
    setNum(n + 1)
    setNum(n + 1)
  }

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={increment2}>+2</button>
    </div>
  )
}
```

> > Will return num = 1 because second setNum will run before first is completed.

```
function Counter() {
  const [num, setNum] = useState(0)

  const increment2 = () => {
    setNum(n => n + 1)
    setNum(n => n + 1)
  }

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={increment2}>+2</button>
    </div>
  )
}
```

> > Will return num = 2 because it passes in callback which waits for all previous requests

### State v Props

- If data needs to change it needs to be in state

```
Example:
Component GameBoard
Score = state (changes)
numRows/numColumns = props (doesn't change)
displayText = state (changes, can be either)
```

# Forms & Controlled Components

- HTML form elements naturally keep some internal state and update it based on input
- In React mutable state is kept in the state of components and only updated with the function returned to useState()
- Use htmlFor instead of for in labels
  > **Controlled Components** are input elements controlled by React (visible input/input state)
  > **Uncontrolled Components** are input elements React is _not_ in control of.

## Formik

- Helps with form validation
- Formik Material UI can be used for formatting

# Testing

- Jest and react-testing-library

## Smoke Test

Does the component render?

## Snapshot Test

Does the component's rendered HTML render correctly?

- Uses asFragment and asSnapshot to compare previous renders
- Command u to update snapshot or command i to interactively update

## Specialized Test

Queries find elements on the page to test.

- exact defaults to true, i.e. getByText matches full strings, case-sensitive
- set {exact: false} for partial match i.e. `count` to `Count is:`

1. **.getBy** find first matching element
2. **.getAllBy** finds all matching elements

> > Queries include getBy/getAllBy: Text, Placeholder, LabelText, TestId, Role, DisplayValue

## Jest DOM Extended Matchers

- **.toHaveClass()** to check whether element has a certain class
- **.toBeInTheDocument()** to check whether element is in DOM
- **.toContainHTML()** to check if element contains certain HTML
- **.toBeEmpty()** to check if element has content

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
