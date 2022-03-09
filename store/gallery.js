// import Vue from "vue";
import apiUrl from "@/constants/api";

export default {
    state: () => ({
        listData: [],
    }),
    mutations: {
        SET_LIST_GALLERY: (state, data) => {
            state.listData = data;
        },
    },
    actions: {
        getListGallery({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .get(apiUrl.GALLERIES_GET_ALL)
                    .then((res) => {
                        commit("SET_LIST_GALLERY", res.data);
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        commit("SET_LIST_GALLERY", []);
                        return reject(err);
                    });
            });
        },
        getDetailGallery({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .get(apiUrl.GALLERIES_GET_BY_ID + data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        addGallery({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .post(apiUrl.GALLERIES_CREATE, data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        updateGallery({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .put(apiUrl.GALLERIES_UPDATE + data.id, data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        removeGallery({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .delete(apiUrl.GALLERIES_DELETE + data)
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