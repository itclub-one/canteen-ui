const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem('cart')) || initialValue;

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.payload,
          product_id: action.payload.id,
          amount: 1,
          customer_notes: '',
        },
      ];
    case 'REMOVE_FROM_CART':
      return state.filter(c => c.id !== action.payload.id);
    case 'CHANGE_CART_QTY':
      return state.filter(c =>
        c.id === action.payload.id
          ? (c.amount = action.payload.amount)
          : c.amount
      );
    case 'CHANGE_CART_NOTE':
      return state.map(c =>
        c.id === action.payload.id
          ? { ...c, customer_notes: action.payload.customer_notes }
          : c
      );
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};
