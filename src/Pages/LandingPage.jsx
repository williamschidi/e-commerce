import Desire from '../features/Desire/Desire';
import AboutUs from '../features/aboutUs/About';
import AllProductSection from '../features/allProductSection/AllProductSection';
import CallToAction from '../features/callToAction/CallToAction';
import Footer from '../features/footer/Footer';
import Hero from '../features/heroSection/Hero';
import Post from '../features/post/Post';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <Hero />
      <AllProductSection />
      <Desire />
      <Post />
      <AboutUs />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;
