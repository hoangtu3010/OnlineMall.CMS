import apiUrl from "@/constants/api";
export default {
  state: () => ({}),
  mutations: {},
  actions: {
    addFile({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(apiUrl.UPLOAD_FILE, data, {headers: {'Content-Type': 'multipart/form-data'}})
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
  },
  getters: {},
};
