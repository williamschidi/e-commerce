import './CallToAction.css';
import background from '../../images/background.png';

function CallToAction() {
  return (
    <section
      className="call-to-action-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="call-to-action">
        <p className="header">Designing Better Experience</p>
        <h2>Problems trying to resolve the conflict between </h2>
        <p className="desc">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <h3>$16.48</h3>
        <button className="btn">ADD YOUR CALL TO ACTION</button>
      </div>
    </section>
  );
}

export default CallToAction;
