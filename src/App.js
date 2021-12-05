
import Footer from './Components/Footer';
import Header from './Components/Header';
import Logo from './Components/Logo';
import Sidebar from './Components/Sidebar';
import Menu from './Components/Menu';

function App() {
  return (
    <>
      <Logo/>
      <Header/>
      <Footer title="Tni" website="www.google.com" address="Bangkok" postcode={10250} isOpen={true}></Footer>
      <Sidebar></Sidebar>
      <Menu></Menu>
    </>
  );
}

export default App;
