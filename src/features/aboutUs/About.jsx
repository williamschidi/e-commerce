import './About.css';
import user from '../../images/user.png';
import star from '../../images/stars.png';
import img4 from '../../images/img-04.png';
import img5 from '../../images/img-05.png';
import img6 from '../../images/img-06.png';
import img7 from '../../images/img-07.png';
import img8 from '../../images/img-08.png';
import img9 from '../../images/img-09.png';
import img10 from '../../images/img-10.png';
import img11 from '../../images/img-11.png';
import img12 from '../../images/img-12.png';

function AboutUs() {
  return (
    <section className="about-section">
      <div className="user-detail-container">
        <h2>What they say about us</h2>
        <div className="user-detail">
          <div>
            <img src={user} alt="user-01" />
          </div>
          <div>
            <img src={star} alt="star-01" />
          </div>
          <p className="goal">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="description">
            <p className="name">Regina Miles</p>
            <p className="job-description">Designer</p>
          </div>
        </div>
      </div>
      <div className="img-gallery">
        <img src={img4} alt="img-04" className="image" />
        <img src={img5} alt="img-05" className="image" />
        <img src={img6} alt="img-06" className="image" />
        <img src={img7} alt="img-07" className="image" />
        <img src={img8} alt="img-08" className="image" />
        <img src={img9} alt="img-09" className="image" />
        <img src={img10} alt="img-10" className="image" />
        <img src={img11} alt="img-11" className="image" />
        <img src={img12} alt="img-12" className="image" />
      </div>
    </section>
  );
}

export default AboutUs;
