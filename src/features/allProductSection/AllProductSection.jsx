import { useSelector } from 'react-redux';

import './AllProductSection.css';

function AllProductSection() {
  const data = useSelector((state) => state.data.data);

  const imageToDisplay = data.products?.slice(0, 10);

  let productImages;
  if (imageToDisplay) {
    productImages = imageToDisplay?.map((x) => x.images).flat();
    productImages?.slice(0, 10);
  }

  return (
    <section className="all-product-container">
      <header className="all-product-header">
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between </p>
      </header>
      <main className="all-product-main">
        {productImages?.slice(0, 10).map((img, i) => (
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
      <div>
        <button className="btn">LOAD MORE PRODUCTS</button>
      </div>
    </section>
  );
}

export default AllProductSection;
