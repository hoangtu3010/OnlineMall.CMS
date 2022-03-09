import apiUrl from "@/constants/api";
export default {
  state: () => ({
    token: [],
  }),
  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data;
    },
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(apiUrl.AUTH_LOGIN, data)
          .then((res) => {
            console.log(res, 'ressssssssssssss')
            return resolve(res);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
  },
  getters: {
    token: (state) => state.token,
  },
};
