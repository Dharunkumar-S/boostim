import Blogs from './components/Blogs';
import CalltoAction from './components/CalltoAction';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Services />
      <Work/>
      <Testimonial/>
      <Blogs/>
      <CalltoAction/>
      <Footer/>
    </div>
  );
}

export default App;
