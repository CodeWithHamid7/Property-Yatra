import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectOverview from '../components/ProjectOverview';
import ContactSection from '../components/ContactSection';
import ProjectVideo from '../components/ProjectVideo';
import ProjectHighlights from '../components/ProjectHighlights';
import Configurations from '../components/Configurations';
import LocationAppreciation from '../components/LocationAppreciation';
import Gallery from '../components/Gallery';
import LocationAdvantages from '../components/LocationAdvantages';
import About from '../components/About';
import Location from '../components/Location';
import ReraDisclaimer from '../components/ReraDisclaimer';
import Footer from '../components/Footer';
import StickyButtons from '../components/StickyButtons';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectOverview />
      <ContactSection />
      <ProjectVideo />
      <ProjectHighlights />
      <Configurations />
      <LocationAppreciation />
      <Gallery />
      <LocationAdvantages />
      <About />
      <Location />
      <ReraDisclaimer />
      <Footer />
      <StickyButtons />
      <ScrollToTop />
    </div>
  );
};

export default Index;