import fullStar from '../../images/full-star.png';
import emptyStar from '../../images/empty-star.png';
import './StarRatings.css';

function StarRatings({ rating }) {
  return (
    <div className="star-container">
      {Array.from({ length: Math.floor(rating) }, (_, i) => (
        <img
          src={fullStar}
          alt="full-star"
          key={i}
          className="star-rating star"
        />
      ))}
      {Array.from({ length: 5 - Math.floor(rating) }, (_, i) => (
        <img
          src={emptyStar}
          alt="full-star"
          key={i}
          className="star-rating star"
        />
      ))}
    </div>
  );
}

export default StarRatings;
