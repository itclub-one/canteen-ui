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

  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem('cart');
    return localData
      ? JSON.parse(localData)
      : {
          ...initialState,
          cart: [],
        };
  });

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/data`, {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 1|xwi8t61ZmswGB9RhrNkbyhaf3FBeozuttJuIGuMM',
            'Content-Type': 'application/json',
          },
        })
        .then(res => {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
        })
        .catch(err => {
          dispatch({ type: 'FETCH_ERROR', error: err });
        });
    };
    getData();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
