import apiUrl from "@/constants/api";
export default {
  state: () => ({
    listGenre: [],
  }),
  mutations: {
    SET_LIST_GENRE: (state, data) => {
      state.listGenre = data;
    },
  },
  actions: {
    getListGenre({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.GENRES_GET_ALL)
          .then((res) => {
            commit("SET_LIST_GENRE", res.data);
            return resolve(res.data);
          })
          .catch((err) => {
            commit("SET_LIST_GENRE", []);
            return reject(err);
          });
      });
    },
    getDetailGenre({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.GENRES_GET_BY_ID + data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    addGenre({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(apiUrl.GENRES_CREATE, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    updateGenre({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .put(apiUrl.GENRES_UPDATE + data.id, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    removeGenre({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .delete(apiUrl.GENRES_DELETE + data)
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
    listGenre: (state) => state.listGenre,
  },
};
