// import Vue from "vue";
import apiUrl from "@/constants/api";

export default {
    state: () => ({
        listData: [],
    }),
    mutations: {
        SET_LIST_PRODUCT: (state, data) => {
            state.listData = data;
        },
    },
    actions: {
        getListProducts({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .get(apiUrl.PRODUCTS_GET_ALL)
                    .then((res) => {
                        commit("SET_LIST_PRODUCT", res.data);
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        commit("SET_LIST_PRODUCT", []);
                        return reject(err);
                    });
            });
        },
        getDetailProducts({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .get(apiUrl.PRODUCTS_GET_BY_ID + data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        addProducts({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .post(apiUrl.PRODUCTS_CREATE, data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        updateProducts({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .put(apiUrl.PRODUCTS_UPDATE + data.id, data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        removeProducts({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .delete(apiUrl.PRODUCTS_DELETE + data)
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