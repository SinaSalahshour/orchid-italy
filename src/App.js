import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route path="/buy" component={Buy} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
