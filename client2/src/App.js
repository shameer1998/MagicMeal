import "./App.css";
import {
  LogIn,
  SignUp,
  RestaurantSignUp,
  AddMenuForm,
  MenuCard,
  Menus,
} from "./components";
import { Home } from "./pages";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/restaurant-signup" component={RestaurantSignUp} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/logIn" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
