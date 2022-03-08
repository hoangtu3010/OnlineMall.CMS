import apiUrl from "@/constants/api";
export default {
  state: () => ({
    listUser: [],
  }),
  mutations: {
    SET_LIST_USER: (state, data) => {
      state.listUser = data;
    },
  },
  actions: {
    getListUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.USERS_GET_ALL)
          .then((res) => {
            commit("SET_LIST_USER", res.data);
            return resolve(res.data);
          })
          .catch((err) => {
            commit("SET_LIST_USER", []);
            return reject(err);
          });
      });
    },
    getDetailUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.USERS_GET_BY_ID + data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    addUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(apiUrl.USER_CREATE, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    updateUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .put(apiUrl.USER_UPDATE + data.id, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    removeUser({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .delete(apiUrl.USER_DELETE + data)
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
    listUser: (state) => state.listUser,
  },
};
