import logo from './logo.svg';
import './App.css';
import Navigation from './layout/Navigation';
import Banner from './layout/Banner';
import Body from './layout/Body';
import Footer from './layout/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Banner></Banner>
      <Body></Body>
      <Footer />
    </div>
  );
}

export default App;
