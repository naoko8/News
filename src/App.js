
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/Header/header';
import Business from './components/main/business.js';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/main/about';
import HomeCarousel from './components/main/home';
import WallStreet from './components/main/wallStreet';
import Register from './components/main/register';

import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";




function Home() {
  return (
    <div>
      <HomeCarousel/>
    </div>
  );
}

function Business_news() {
  return (
    <div>
      <Business/>
    </div>
  );
}

function WallStreet_news() {
  return (
    <div>
      <WallStreet/>
    </div>
  );
}
function About_news() {
  return (
    <div>
      <AboutMe/>
    </div>
  );
}
  function Registration() {
    return (
      <div>
        <Register/>
      </div>
    );
  }
  



function App() {
  return (
    <HashRouter>
      <Header/>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Business">
            <Business_news />
          </Route>
          <Route path="/WallStreet">
            <WallStreet_news />
          </Route>
          <Route path="/About">
            <About_news />
          </Route>
          <Route path="/Register">
            <Registration />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </HashRouter>
    
  );
}


export default App;
