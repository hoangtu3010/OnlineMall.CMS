// import Vue from "vue";
import apiUrl from "@/constants/api";

export default {
    state: () => ({
        listData: [],
    }),
    mutations: {
        SET_LIST_SHOP: (state, data) => {
            state.listData = data;
        },
    },
    actions: {
        getListShops({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .get(apiUrl.SHOPS_GET_ALL)
                    .then((res) => {
                        commit("SET_LIST_SHOP", res.data);
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        commit("SET_LIST_SHOP", []);
                        return reject(err);
                    });
            });
        },
        getDetailShops({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .get(apiUrl.SHOP_GET_BY_ID + data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        addShops({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .post(apiUrl.SHOP_CREATE, data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        updateShops({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .put(apiUrl.SHOP_UPDATE + data.id, data)
                    .then((res) => {
                        return resolve(res.data);
                    })
                    .catch((err) => {
                        return reject(err);
                    });
            });
        },
        removeShops({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios
                    .delete(apiUrl.SHOP_DELETE + data)
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