import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Sponsor from './components/Sponsor'
function App() {
  return (
    <div className='app-container'>
      <Navbar></Navbar>
      <div className="header-wrapper">
        <Header></Header>
      </div>
      
      <Sponsor></Sponsor>
      <Footer></Footer>
    </div>
  );
}

export default App;
