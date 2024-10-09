
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './pages/shared/Navbar';
import Banner from './pages/banner/Banner';
import AboutMe from './pages/aboutMe/AboutMe';
import Services from './pages/services/Services';
import MyProjects from './pages/myProjects/MyProjects';
import Testimonials from './pages/Testimonials/Testimonials';
import ContactMe from './pages/contactme/ContactMe';
import Footer from './pages/shared/Footer';

function App() {
  return (
    <Router>
      <div className="container mx-auto bg-white
      ">
        <Navbar />
        <main>
          <Banner />
          <AboutMe />
          <Services />
          <MyProjects />
          <Testimonials />
          <ContactMe />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
