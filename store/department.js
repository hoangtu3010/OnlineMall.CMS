import apiUrl from "@/constants/api";
export default {
  state: () => ({
    listDepartment: [],
  }),
  mutations: {
    SET_LIST_DEPARTMENT: (state, data) => {
      state.listDepartment = data;
    },
  },
  actions: {
    getListDepartment({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.DEPARTMENTS_GET_ALL)
          .then((res) => {
            commit("SET_LIST_DEPARTMENT", res.data);
            return resolve(res.data);
          })
          .catch((err) => {
            commit("SET_LIST_DEPARTMENT", []);
            return reject(err);
          });
      });
    },
    getDetailDepartment({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(apiUrl.DEPARTMENTS_GET_BY_ID + data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    addDepartment({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(apiUrl.DEPARTMENTS_CREATE, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    updateDepartment({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .put(apiUrl.DEPARTMENTS_UPDATE + data.id, data)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    removeDepartment({ commit }, data) {
        return new Promise((resolve, reject) => {
          return this.$axios
            .delete(apiUrl.DEPARTMENTS_DELETE + data)
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
    listDepartment: (state) => state.listDepartment,
  },
};
