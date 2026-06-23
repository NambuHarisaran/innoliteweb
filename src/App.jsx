import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import LogoTicker from './components/sections/LogoTicker.jsx';
import About from './components/sections/About.jsx';
import Courses from './components/sections/Courses.jsx';
import Stats from './components/sections/Stats.jsx';
import WhyChooseUs from './components/sections/WhyChooseUs.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <About />
        <Courses />
        <Stats />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
