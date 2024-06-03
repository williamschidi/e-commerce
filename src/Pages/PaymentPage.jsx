import ShoppingCart from '../features/ShoppingCart/ShoppingCart';
import Footer from '../features/footer/Footer';

import HeroSectionHeader from '../features/heroSection/HeroSectionHeader';
import DisplayGrid from '../features/productDisplay/DisplayGrid';

function PaymentPage() {
  return (
    <>
      <HeroSectionHeader />
      <ShoppingCart />

      <DisplayGrid title="PRODUCTS RELATED TO ITEMS IN YOUR CART" />
      <Footer />
    </>
  );
}

export default PaymentPage;
