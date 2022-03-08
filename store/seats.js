import apiUrl from "@/constants/api";
export default {
  state: () => ({
    listSeats: [],
  }),
  mutations: {
    SET_LIST_SEATS: (state, data) => {
      state.listSeats = data;
    },
  },
  actions: {
    getListSeats({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.SEATS_GET_ALL)
          .then((res) => {
            commit("SET_LIST_SEATS", res.data);
            return resolve(res.data);
          })
          .catch((err) => {
            commit("SET_LIST_SEATS", []);
            return reject(err);
          });
      });
    },
    getDetailSeats({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.SEATS_GET_BY_ID + data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    addSeats({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(apiUrl.SEATS_CREATE, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    updateSeats({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .put(apiUrl.SEATS_UPDATE + data.id, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    removeSeats({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .delete(apiUrl.SEATS_DELETE + data)
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
    listSeats: (state) => state.listSeats,
  },
};
