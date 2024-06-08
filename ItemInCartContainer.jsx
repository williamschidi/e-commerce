import './ItemInCartContainer.css';
import ShoppingCartItemCard from './src/features/card/ShoppingCartItemCard';

function ItemInCartContainer({ title }) {
  return (
    <div className="item-container">
      <h2 className="display-Title-cart-item">{title}</h2>
      <div className="item-in-cart-container">
        <ShoppingCartItemCard />
      </div>
    </div>
  );
}

export default ItemInCartContainer;
