import { useDispatch, useSelector } from 'react-redux';
import './AllProductSection.css';
import { useState } from 'react';
import fullStar from '../../images/full-star.png';
import emptyStar from '../../images/empty-star.png';
import { addItemToCart } from '../api/cartDataSlice';

function AllProductSection() {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [showLess, setShowLess] = useState(true);

  let productImages;
  const itemsToDisplay = showLess ? 10 : data.products?.length;
  productImages = data.products;

  function handleClickMore() {
    setShowLess((prev) => !prev);
  }

  function handleAddToCart(item) {
    dispatch(
      addItemToCart({
        image: item.images[0],
        title: item.title,
        price: item.price,
        rating: item.rating,
      })
    );
  }

  return (
    <section className="all-product-container">
      <header className="all-product-header">
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between </p>
      </header>

      <main className="all-product-main">
        {productImages
          ?.flat()
          ?.slice(0, itemsToDisplay)
          .map((item, i) => (
            <div className="card" key={i}>
              {console.log(item)}

              <img src={item.images[0]} alt="pic" />

              {item.availabilityStatus === 'Out of Stock' && (
                <p className="out-of-cost">OUT OF COST</p>
              )}
              <div className="product-detail">
                <p className="brand">{item.brand}</p>
                <p className="name">{item.title}</p>
                <p className="price">€ {item.price}</p>
                <div className="rating-container">
                  <div>
                    <span>
                      {Array.from(
                        { length: Math.floor(item.rating) },
                        (_, i) => (
                          <img
                            src={fullStar}
                            alt="full-star"
                            key={i}
                            className="star-rating"
                          />
                        )
                      )}
                      {Array.from(
                        { length: 5 - Math.floor(item.rating) },
                        (_, i) => (
                          <img
                            src={emptyStar}
                            alt="full-star"
                            key={i}
                            className="star-rating"
                          />
                        )
                      )}
                    </span>
                  </div>
                  <span className="rating">{item.rating}</span>
                </div>
              </div>
              <div className="card-btn-container ">
                <button
                  className="card-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  ADD TO BASKET
                </button>
              </div>
            </div>
          ))}
      </main>

      {showLess ? (
        <button className="btn" onClick={handleClickMore}>
          LOAD MORE PRODUCTS
        </button>
      ) : (
        <button className="btn" onClick={handleClickMore}>
          LOAD LESS PRODUCTS
        </button>
      )}
    </section>
  );
}

export default AllProductSection;
