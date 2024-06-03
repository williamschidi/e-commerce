import displayImg from '../../images/display-img.png';
import './DisplayGrid.css';
function DisplayGrid({ title }) {
  return (
    <div className="sub-container">
      <h2 className="display-Title">{title}</h2>
      <div className="display-grid">
        {Array.from({ length: 8 }, (_, i) => (
          <div className="card" key={i}>
            <img src={displayImg} alt="pic" />
            <div className="product-detail">
              <p className="name">Graphic Design</p>
              <h3 className="categories">English Department</h3>
              <p className="price">
                <span className="price-1">$16.48</span>
                <span className="price-2">$6.48</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayGrid;
