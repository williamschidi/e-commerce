import { useMediaQuery } from 'react-responsive';
import HeroSectionMobile from './HeroSectionMobile';
import HeroSectionHeadDesktop1 from './HeroSectionHeadDesktop1';

function HeroSectionHeader() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return <>{!isMobile ? <HeroSectionHeadDesktop1 /> : <HeroSectionMobile />}</>;
}
export default HeroSectionHeader;
