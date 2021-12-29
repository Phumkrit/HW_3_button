
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
import ProductPage from './Components/pages/ProductPage';
import DetailPage from './Components/pages/DetailPage';
import ContactMe from './Components/pages/ContactMe';
import HospitalPage from './Components/pages/Hospital/HospitalPage';


function App() {
  return (
    <Router>
     <Navbar></Navbar>
     <Switch>
       <Route exact path='/'><HomePage/></Route>
       <Route path='/about'><AboutPage/></Route>
       <Route path='/product'><ProductPage/></Route>
       <Route path='/contact'><ContactMe></ContactMe></Route>
       <Route path="/detail/:id/title/:title">
         <DetailPage/>
         </Route>
         <Route path="/hospital"><HospitalPage/></Route>
     </Switch>
     <Footer></Footer>
      
    </Router>
  );
}

export default App;
