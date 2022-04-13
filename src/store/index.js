import { createStore } from "vuex";
import book from "./book";
import cart from "./cart";

export default createStore({
  modules: {
    book,
    cart,
  },
});
