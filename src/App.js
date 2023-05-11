import { sum, multiply } from "./helpers.js";
import cats, { meow } from "./cats";
import items from "./items";
import ShoppingCart from "./cart";
import Alert from "./alert.js";
import { Clicker, ButtonGroup } from "./clicker.js";
import NumberGame from "./NumberGame.js";
import NumbersList from "./NumbersList.js";
import UserForm from "./UserForm.js";

function App() {
  return (
    <div className="App">
      <UserForm />
      <NumbersList />
      {/* <Alert variant="success">
        <h1>Welcome back!</h1>
      </Alert>
      <Alert variant="danger">
        <h1>Error!</h1>
      </Alert>
      <NumberGame />
      <NumberGame />
      <Clicker />
      <ButtonGroup />
      <ShoppingCart items={items} username="Raja" />
      <ul>
        <li>Name: {cats[0].name}</li>
        <li>Midna goes {meow()}</li>
      </ul>
      <p>Sum(3, 7) = {sum(3, 7)}</p>
      <p>Multiply(4, 9) = {multiply(4, 9)}</p> */}
    </div>
  );
}

export default App;
