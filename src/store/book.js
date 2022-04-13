import { getTransformBooks, apiBase } from "../services/bookApiService";

export default {
  state: {
    books: [],
    currentBook: {
      image: "",
      description:
        "https://brodilla.com/assets/images/browsers/pictures/epic_browser_1_2.png",
    },
    loading: false,
    searchText: "",
    alert: false,
  },

  getters: {
    getSearchBooks: ({ books }) => books,
    getLoading: ({ loading }) => loading,
    getSearchText: ({ searchText }) => searchText,
    getCurrentBook: ({ currentBook }) => currentBook,
    getAlert: ({ alert }) => alert,
  },

  mutations: {
    setBooks(state, payload) {
      state.books = payload;
    },

    setLoadingTrue(state) {
      state.loading = true;
    },

    setLoadingFalse(state) {
      state.loading = false;
    },

    setSearchText(state, payload) {
      state.searchText = payload;
    },

    setCurrentBook(state, book) {
      state.currentBook = book;
    },

    showAlert(state) {
      state.alert = true;
    },

    hideAlert(state) {
      state.alert = false;
    },
  },

  actions: {
    setBooks({ commit }, text) {
      commit("setLoadingTrue");
      commit("setSearchText", text);
      fetch(`${apiBase}${text}`)
        .then((res) => res.json())
        .then((res) => {
          commit("setBooks", getTransformBooks(res.items));
          commit("setLoadingFalse");
        })
        .catch((e) => {
          commit("setLoadingFalse");
          console.error(e);
        });
    },

    hideAlert({ commit }) {
      setTimeout(() => {
        commit("hideAlert");
      }, 5000);
    },
  },
};
