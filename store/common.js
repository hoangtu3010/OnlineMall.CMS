export default {
    actions:{
        sCreate({ commit }, data) {
            return new Promise((resolve, reject) => {
                return this.$axios.post(this.$api.USER_CREATE, data).then(response => {
                    return resolve(response.result);
                }).catch(err => {
                    return reject(err);
                });
            })
        },
    }
}