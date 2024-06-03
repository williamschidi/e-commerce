import logo01 from '../../images/logo-001.png';
import logo02 from '../../images/logo-002.png';
import logo03 from '../../images/logo-003.png';
import logo04 from '../../images/logo-004.png';
import logo05 from '../../images/logo-005.png';
import logo06 from '../../images/logo-006.png';
import DisplayGrid from './DisplayGrid';
import './ProductDisplay.css';

function ProductDisplay() {
  return (
    <section className="product-display-container">
      <div className="sub-container">
        <DisplayGrid title="BESTSELLER PRODUCT" />
      </div>
      <div className="advert">
        <img src={logo01} alt="logo-1" className="company-logo" />
        <img src={logo02} alt="logo-2" className="company-logo" />
        <img src={logo03} alt="logo-3" className="company-logo" />
        <img src={logo04} alt="logo-4" className="company-logo" />
        <img src={logo05} alt="logo-5" className="company-logo" />
        <img src={logo06} alt="logo-6" className="company-logo" />
      </div>
    </section>
  );
}

export default ProductDisplay;
