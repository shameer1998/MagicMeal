import "./App.css";
import {
  LogIn,
  SignUp,
  RestaurantSignUp,
  RestaurantLogIn,
  AddMenuForm,
  MenuCard,
  Menus,
  NavBar,
} from "./components";
import {
  Home,
  MenuPage,
  About,
  Contact,
  CustomerFeedPage,
  ViewMenus,
} from "./pages";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>

      <Route path="/menus">
        <MenuPage />
      </Route>

      <Route path="/customer/feed">
        <CustomerFeedPage />
      </Route>

      <Route path="/viewmenus">
        <ViewMenus />
      </Route>
    </div>
  );
}

export default App;
