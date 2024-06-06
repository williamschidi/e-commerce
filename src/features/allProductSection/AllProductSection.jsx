import { useSelector } from 'react-redux';
import './AllProductSection.css';
import { useState } from 'react';

import Card from '../card/Card';

function AllProductSection() {
  const { data } = useSelector((state) => state.data);
  const [showLess, setShowLess] = useState(true);

  let productImages;
  const itemsToDisplay = showLess ? 10 : data.products?.length;
  productImages = data.products;

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
        {productImages
          ?.flat()
          ?.slice(0, itemsToDisplay)
          .map((item, i) => (
            <Card item={item} key={i} />
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
