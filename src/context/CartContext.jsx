import { createContext, useEffect, useReducer, useContext } from 'react';
import { cartReducer, initializer } from './Reducers';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // * Check & Get cart from localstorage
  const [cart, dispatch] = useReducer(cartReducer, [], initializer);

  // * Save cart state to local storage
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => useContext(CartContext);

export default CartProvider;
