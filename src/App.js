
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
import HospitalPage from './Components/pages/Category/HospitalPage';
import IndexPage from './Components/pages/Category/IndexPage';
import CreatePage from './Components/pages/Category/CreatePage';
import EditPage from './Components/pages/Category/EditPage';
import { ToastProvider } from 'react-toast-notifications';
import RegisterPage from './Components/pages/RegisterPage';
import LoginPage from './Components/pages/LoginPage';
import UploadPage from './Components/pages/UploadPage';
import Navbar_v1 from './Components/Navbar';
import MemberPage from './Components/pages/MemberPage';
import PrivateRoute from './guard/auth';
import UserStoreProvider from "./context/UserContext";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./redux/reducers/index";

const store = createStore(rootReducer)


function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
        <ToastProvider>
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              {/* <Route path="/contact_us">
                <ContactUs />
              </Route> */}
              <Route path="/product">
                <ProductPage />
              </Route>
              <Route path="/detail/:id/title/:title">
                <DetailPage />
              </Route>
              <Route path="/hospital">
                <HospitalPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <Route path="/upload">
                <UploadPage />
              </Route>
              <PrivateRoute path="/member">
                <MemberPage />
              </PrivateRoute>
              {/* makesense */}
              <Route
                path="/category"
                render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} exact>
                      <IndexPage />
                    </Route>
                    <Route path={`${url}/create`}>
                      <CreatePage />
                    </Route>
                    <Route path={`${url}/edit/:id`}>
                      <EditPage />
                    </Route>
                  </>
                )}
              ></Route>
            </Switch>
            <Footer />
          </Router>
        </ToastProvider>
      </UserStoreProvider>
    </Provider>
  );
}

export default App;
