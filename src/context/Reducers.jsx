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
        cart: [...state.cart, { ...action.payload, product_id: action.payload.id, amount: 1, customer_notes: '' }],
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
          c.id === action.payload.id ? (c.amount = action.payload.amount) : c.amount
        ),
      };
    case 'CHANGE_CART_NOTE':
      return {
        ...state,
        cart: state.cart.map(c =>
          c.id === action.payload.id ? { ...c, customer_notes: action.payload.customer_notes } : c
        ),
      };
    default:
      return state;
  }
};
