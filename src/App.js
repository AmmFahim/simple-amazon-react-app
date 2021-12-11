import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/shop">
         <Shop/>
        </Route>
        <Route exact path="/review">
         <Review/>
        </Route>
        <Route exact path="/inventory">
          <Inventory/>
        </Route>
        <Route exact path="/">
          <Shop/>
        </Route>
        <Route path="/product/:productkey">
          <ProductDetails/>
        </Route>
        <Route exact path="*">
          <NotFound/>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
