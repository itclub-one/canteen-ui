export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1, note: '' }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(c => c.id !== action.payload.id),
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter(c =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case 'CHANGE_CART_NOTE':
      return {
        ...state,
        cart: [
          ...state.cart,
          state.cart.filter(c =>
            c.id === action.payload.id
              ? (c.note = action.payload.note)
              : (c.note = '')
          ),
        ],
      };
    default:
      return state;
  }
};
