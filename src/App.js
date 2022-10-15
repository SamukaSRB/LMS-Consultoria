import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ServicesExperience from './components/ServicesExperience';
import Vagas from './components/Vagas';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <ServicesExperience/>
      <Vagas />
      <Footer />
    
    </div>
  );
}

export default App;
