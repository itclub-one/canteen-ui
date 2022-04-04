import { createContext, useEffect, useReducer, useContext } from 'react';
import { cartReducer } from './Reducers';
import axios from 'axios';

const Cart = createContext();

const Context = ({ children }) => {
  const initialState = {
    data: null,
    cart: [],
    loading: true,
    error: null,
  };

  // Get cart from localstorage
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem('cart.cart');

    return localData
      ? JSON.parse(localData)
      : {
          cart: [],
        };
  });

  // Fetch Data
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/products`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
            'Content-Type': 'application/json',
          },
        })
        .then(res => {
          // * Use code below when using json server
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
          // * Use code below when using backend API
          // dispatch({ type: 'FETCH_SUCCESS', payload: res.data.data });
        })
        .catch(err => {
          dispatch({ type: 'FETCH_ERROR', error: err });
        });
    };
    getData();
  }, []);

  // Save cart state to local storage
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
