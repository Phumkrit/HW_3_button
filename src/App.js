
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Components/pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './Components/pages/AboutPage';


function App() {
  return (
    <Router>
     <Navbar></Navbar>
     <Switch>
       <Route exact path='/'><HomePage/></Route>
       <Route path='/about'><AboutPage/></Route>
     </Switch>
     <Footer></Footer>
      
    </Router>
  );
}

export default App;
