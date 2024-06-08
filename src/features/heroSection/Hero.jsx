import './Hero.css';
import HeroSectionBody from './HeroSectionBody';
import HeroSectionHeader from './HeroSectionHeader';

function Hero() {
  return (
    <div className="hero-container">
      <HeroSectionHeader />
      <HeroSectionBody />
    </div>
  );
}

export default Hero;
