import "./App.css";
import {
  LogIn,
  SignUp,
  RestaurantSignUp,
  RestaurantLogIn,
  AddMenuForm,
  MenuCard,
  Menus,
} from "./components";
import { Home, MenuPage } from "./pages";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/restaurant-signup" component={RestaurantSignUp} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/restaurant-logIn" component={RestaurantLogIn} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/addmenu" component={AddMenuForm} />
        <Route path="/menucard" component={MenuCard} />
        <Route path="/menus" component={MenuPage} />
      </Switch>
    </div>
  );
}

export default App;
