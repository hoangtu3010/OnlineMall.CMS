import apiUrl from "@/constants/api";
export default {
  state: () => ({
    listMovies: [],
  }),
  mutations: {
    SET_LIST_MOVIES: (state, data) => {
      state.listMovies = data;
    },
  },
  actions: {
    getListMovies({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.MOVIES_GET_ALL)
          .then((res) => {
            commit("SET_LIST_MOVIES", res.data);
            return resolve(res.data);
          })
          .catch((err) => {
            commit("SET_LIST_MOVIES", []);
            return reject(err);
          });
      });
    },
    getDetailMovies({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.MOVIES_GET_BY_ID + data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    addMovies({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(apiUrl.MOVIES_CREATE, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    updateMovies({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .put(apiUrl.MOVIES_UPDATE + data.id, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    removeMovies({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .delete(apiUrl.MOVIES_DELETE + data)
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
    listMovies: (state) => state.listMovies,
  },
};
