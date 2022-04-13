export default {
  state: {
    cartItems: [],
    totalOrder: 0,
  },

  getters: {
    getCartItems: ({ cartItems }) => cartItems,
    getTotal: ({ cartItems }) =>
      cartItems.reduce((sum, current) => sum + current.price, 0),
    getTotalOrder: ({ totalOrder }) => totalOrder,
  },

  mutations: {
    addBookToCart(state, { image, description, price, currency }) {
      state.cartItems.push({ image, description, price, currency });
    },

    setTotal(state, total) {
      state.totalOrder = total;
      state.cartItems = [];
    },
  },
};
