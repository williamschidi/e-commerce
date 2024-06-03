import img1 from '../../images/product-cover.png';
import './AllProductSection.css';

function AllProductSection() {
  return (
    <section className="all-product-container">
      <header className="all-product-header">
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between </p>
      </header>
      <main className="all-product-main">
        {Array.from({ length: 10 }, (_, i) => (
          <div className="card" key={i}>
            <img src={img1} alt="pic" />
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
