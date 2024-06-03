import ShoppingCart from '../features/ShoppingCart/ShoppingCart';
import Footer from '../features/footer/Footer';
import Hero from '../features/heroSection/Hero';
import DisplayGrid from '../features/productDisplay/DisplayGrid';

function PaymentPage() {
  return (
    <>
      <Hero />
      <ShoppingCart />
      <DisplayGrid title="PRODUCTS RELATED TO ITEMS IN YOUR CART" />
      <Footer />
    </>
  );
}

export default PaymentPage;
