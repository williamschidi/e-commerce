import './AdditionalDetail.css';
import img from '../../images/additional-info-img.png';

function AdditionalDetail() {
  return (
    <section className="more-details-container">
      <ul className="more-detail-nav">
        <li>Description</li>
        <li>Additional Information</li>
        <li>Reviews</li>
      </ul>
      <div className="more-details">
        <div className="more-detail">
          <h3>the quick fox jumps over </h3>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="additional-img-container">
          <img src={img} alt="pic" />
        </div>
      </div>
    </section>
  );
}

export default AdditionalDetail;
