<template>
<div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>Add new User</h4>
    </div>
    <hr />
    <div style="padding: 20px 0">
      <div class="form-group">
        <input
          v-model="data.name"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Name</label>
      </div>

      <div class="form-group">
        <input
          v-model="data.email"
          type="email"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Email</label>
      </div>

      <div class="form-group">
        <input
          v-model="data.password"
          type="password"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Password</label>
      </div>

      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/admin">
            <button @click="addOrUpdate" type="submit" class="btn">Add</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
   
  },
  data() {
    return {
      id:0,
      data: {
        id: 0,
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {   
   this.id = parseInt(this.$route.params.id)
    this.getUserById(this.id);
  },
  methods: {
    addOrUpdate() {
      if (this.id == 0) {
        this.$axios
          .post(this.$api.USER_CREATE, {
            name: this.data.name,
            email: this.data.email,
            password: this.data.password,
          })
          .then((response) => {this.getData()})
          .catch((e) => {});
      } else {
        console.log('sdvc')
        this.$axios.put("/api/Users/PutUser/"+this.id,this.data).then((response) => {
           this.getData()
        });
      }
    },
     getData() {
      this.$axios
        .get(this.$api.USERS_GET_ALL)
        .then((res) => {
          console.log(res)
          return this.listData = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getUserById(id) {
      this.$axios.get("/api/Users/GetUser/" + id).then((res) => {
        this.data = res.data;
      });
    },
  },
};

</script>
