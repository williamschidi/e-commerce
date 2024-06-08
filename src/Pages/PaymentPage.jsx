import ItemInCartContainer from '../../ItemInCartContainer';
import ShoppingCart from '../features/ShoppingCart/ShoppingCart';
import Footer from '../features/footer/Footer';

import HeroSectionHeader from '../features/heroSection/HeroSectionHeader';

function PaymentPage() {
  return (
    <>
      <HeroSectionHeader />
      <ShoppingCart />
      <ItemInCartContainer title="PRODUCTS RELATED TO ITEMS IN YOUR CART" />
      <Footer />
    </>
  );
}

export default PaymentPage;
