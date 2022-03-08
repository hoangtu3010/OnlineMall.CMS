import apiUrl from "@/constants/api";
export default {
  state: () => ({
    listCategories: [],
  }),
  mutations: {
    SET_LIST_CATEGORIES: (state, data) => {
      state.listCategories = data;
    },
  },
  actions: {
    getListCategories({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.CATEGORIES_GET_ALL)
          .then((res) => {
            commit("SET_LIST_CATEGORIES", res.data);
            return resolve(res.data);
          })
          .catch((err) => {
            commit("SET_LIST_CATEGORIES", []);
            return reject(err);
          });
      });
    },
    getDetailCategories({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.CATEGORIES_GET_BY_ID + data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    addCategories({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(apiUrl.CATEGORIES_CREATE, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    updateCategories({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .put(apiUrl.CATEGORIES_UPDATE + data.id, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    removeCategories({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .delete(apiUrl.CATEGORIES_DELETE + data)
            .then((res) => {
              return resolve(res.data);
            })
            .catch((err) => {
              return reject(err);
            });
        });
      },
  },
  getters: {
    listCategories: (state) => state.listCategories,
  },
};
