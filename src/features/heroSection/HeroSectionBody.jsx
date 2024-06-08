import image1 from '../../images/media-bg-cover.png';
import image2 from '../../images/media-bg-cover1.png';
import image3 from '../../images/media-bg-cover2.png';
import image4 from '../../images/media-bg-cover3.png';
import './HeroSectionBody.css';

function HeroSectionBody() {
  return (
    <main className="main">
      <section
        className="left-section"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="section-head-left">
          <p className="items">5 Items</p>
          <h2>Furniture</h2>
          <p>Read More</p>
        </div>
      </section>
      <section className="right-section">
        <div
          className="right-top"
          style={{ backgroundImage: `url(${image4})` }}
        >
          <div className="section-head-right">
            <p className="items">5 Items</p>
            <h2>Furniture</h2>
            <p>Read More</p>
          </div>
        </div>
        <div className="right-bottom">
          <div
            className="right-bottom-1"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div className="section-head-right">
              <p className="items">5 Items</p>
              <h2 className="">Furniture</h2>
              <p>Read More</p>
            </div>
          </div>
          <div
            className="right-bottom-2"
            style={{ backgroundImage: `url(${image3})` }}
          >
            <div className="section-head-right">
              <p className="items">5 Items</p>
              <h2>Furniture</h2>
              <p>Read More</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSectionBody;
