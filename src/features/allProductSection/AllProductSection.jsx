import { useSelector } from 'react-redux';

import './AllProductSection.css';
import { useState } from 'react';

function AllProductSection() {
  const data = useSelector((state) => state.data.data);
  const [showLess, setShowLess] = useState(true);

  let productImages;
  const imageToDisplay = showLess ? 10 : data.products?.length;
  productImages = data.products?.map((x) => x.images).flat();

  function handleClickMore() {
    setShowLess((prev) => !prev);
  }

  return (
    <section className="all-product-container">
      <header className="all-product-header">
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between </p>
      </header>
      <main className="all-product-main">
        {productImages?.slice(0, imageToDisplay).map((img, i) => (
          <div className="card" key={i}>
            <img src={img} alt="pic" />
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
