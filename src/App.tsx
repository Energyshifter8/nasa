import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import ThreeDemo from './components/ThreeDemo';
import Mentor from './components/Mentor';
import Testimonials from './components/Testimonials';
import Register from './components/Register';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="curriculum">
        <Curriculum />
      </div>
      <div id="demo">
        <ThreeDemo />
      </div>
      <div id="mentor">
        <Mentor />
      </div>
      <Testimonials />
      <Register />
      <Footer />
    </div>
  );
}
