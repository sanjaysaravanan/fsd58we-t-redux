const initialState = {
  products: [],
  totalProducts: 0,
  coupon: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Just for task Reference */
    case "product_add_to_cart":
      return {
        ...state, //
        products: [...state.products, action.product],
        totalProducts: state.totalProducts + 1,
      };
    case "cart_apply_coupon":
      return {
        ...state, // existing values will be added
        // below lines will override the above
        coupon: action.coupon,
      };
    case "cart_reset":
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
