import apiUrl from "@/constants/api";

export default {
    state: () => ({
      listBooking: [],
    }),
    mutations: {
      SET_LIST_BOOKING: (state, data) => {
        state.listBooking = data;
      },
    },
    actions: {
      getListBooking({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .get(apiUrl.BOOKING_GET_ALL)
            .then((res) => {
              commit("SET_LIST_BOOKING", res.data);
              return resolve(res.data);
            })
            .catch((err) => {
              commit("SET_LIST_BOOKING", []);
              return reject(err);
            });
        });
      },
      getDetailBooking({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .get(apiUrl.BOOKING_GET_BY_ID + data)
            .then((res) => {
              return resolve(res.data);
            })
            .catch((err) => {
              return reject(err);
            });
        });
      },
      addBooking({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .post(apiUrl.BOOKING_CREATE, data)
            .then((res) => {
              return resolve(res.data);
            })
            .catch((err) => {
              return reject(err);
            });
        });
      },
      updateBooking({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .put(apiUrl.BOOKING_UPDATE + data.id, data)
            .then((res) => {
              return resolve(res.data);
            })
            .catch((err) => {
              return reject(err);
            });
        });
      },
      removeBooking({ commit }, data) {
          return new Promise((resolve, reject) => {
            return this.$axios
              .delete(apiUrl.BOOKING_DELETE + data)
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
      listBooking: (state) => state.listBooking,
    },
  };
  