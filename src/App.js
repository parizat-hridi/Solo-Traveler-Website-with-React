import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Header from './MyComponents/Header';
import { Home } from './MyComponents/Home';
import { About } from './MyComponents/About';
import { Services } from './MyComponents/Services';
import { Footer } from './MyComponents/Footer';




function App() {
  return (

    <>

      <Router>
        <div>

          <Header />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />

            <Route path="/services" component={Services} />

          </Switch>

          <Footer />

        </div>

      </Router>

    </>

  );
}

export default App;
