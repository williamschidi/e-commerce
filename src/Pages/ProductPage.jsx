import AdditionalDetail from '../features/additionalDetails/AdditionalDetail';
import Footer from '../features/footer/Footer';
import ProductDetail from '../features/productDetails/ProductDetail';
import ProductDisplay from '../features/productDisplay/ProductDisplay';

function ProductPage() {
  return (
    <>
      <ProductDetail />
      <AdditionalDetail />
      <ProductDisplay />
      <Footer />
    </>
  );
}

export default ProductPage;
