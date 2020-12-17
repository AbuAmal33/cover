import {Switch, NavLink, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer";
import NotFound from "./Components/NotFound";
import Fetures from "./Components/Fetures/Fetures";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
      <header>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-7'}>
               <h3>Cover</h3>
            </div>
            <div className={'col-md-5'}>
              <nav className={'menu justify-content-around'}>
                <NavLink to={'/'}
                         activeClassName={'nav_link_1'}
                         activeStyle={{color: 'white'}}>
                    Home
                </NavLink>
                <NavLink to={'/fetures'}
                         activeClassName={'nav_link_2'}
                         activeStyle={{color: 'white'}}>
                    Fetures
                </NavLink>
                <NavLink to={'/contact'}
                         activeClassName={'nav_link_3'}
                         activeStyle={{color: 'white'}}>
                    Contact
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        <Switch>
            <Route exact path={'/'}>
                <main>
                    <Home />
                </main>
                <footer>
                    <Footer />
                </footer>
            </Route>
            <Route path={'/fetures'}>
                <Fetures />
            </Route>
            <Route path={'/contact'}>
                <Contact />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
      </header>
    );
}

export default App;
