import AdditionalDetail from '../features/additionalDetails/AdditionalDetail';
import AllProductSection from '../features/allProductSection/AllProductSection';
import Footer from '../features/footer/Footer';
import ProductDetail from '../features/productDetails/ProductDetail';
// import ProductDisplay from '../features/productDisplay/ProductDisplay';

function ProductPage() {
  return (
    <>
      <ProductDetail />
      <AdditionalDetail />
      <AllProductSection />
      <Footer />
    </>
  );
}

export default ProductPage;
