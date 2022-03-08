import apiUrl from "@/constants/api";

export default {
    state: () => ({
        listData: [],
    }),
    mutations: {
        SET_LIST_MOVIE_TODAY: (state, data) => {
            state.listData = data;
        },
    },
    actions: {
        getListMovieToday({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .get(apiUrl.MOVIES_TODAY_GET_ALL)
                    .then((res) => {
                        commit("SET_LIST_MOVIE_TODAY", res.data);
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        commit("SET_LIST_MOVIE_TODAY", []);
                        return reject(err);
                    });
            });
        },
        getDetailMovieToday({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .get(apiUrl.MOVIES_TODAY_GET_BY_ID + data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        addMovieToday({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .post(apiUrl.MOVIES_TODAY_CREATE, data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        updateMovieToday({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .put(apiUrl.MOVIES_TODAY_UPDATE + data.id, data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        removeMovieToday({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .delete(apiUrl.MOVIES_TODAY_DELETE + data)
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
        listData: (state) => state.listData,
    },
};