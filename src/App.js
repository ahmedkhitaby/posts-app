import CardList from "./components/CardList/CardList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./layout/NotFound/NotFound";
import Home from "./layout/Home/Home";
import Footer from "./components/Footer/Footer";
import CardDetails from "./components/CardDetails/CardDetails";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="min-h-screen">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts/:id">
            <CardDetails />
          </Route>
          <Route path="/posts">
            <CardList />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
