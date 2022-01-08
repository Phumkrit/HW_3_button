
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
import HospitalPage from './Components/pages/Category/HospitalPage';
import IndexPage from './Components/pages/Category/IndexPage';
import CreatePage from './Components/pages/Category/CreatePage';
import EditPage from './Components/pages/Category/EditPage';



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
         <Route path="/category"
            render={({ match: { url } }) => (
              <>
              <Route path={`${url}/`} exact><IndexPage /></Route>
              <Route path={`${url}/create`}><CreatePage/></Route>
              <Route path={`${url}/edit/:id`}><EditPage/></Route>
              </>

            )}>
          </Route>
         
     </Switch>
     <Footer></Footer>
      
    </Router>
  );
}

export default App;
