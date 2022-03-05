<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>Update movieToday</h4>
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
          v-model="data.showDate"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Show date</label>
      </div>
      <div class="form-group">
        <input
          v-model="data.showTime"
          type="text"
          class="form-control"
          placeholder=" "
        />
        <label for="" class="form-label">Show time</label>
      </div>

      

      <div class="form-group">
        <div class="button-form">
          <nuxt-link to="/movieToday">
            <button @click="addOrUpdate" type="submit" class="btn">update</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:0,
      data:{},
      dataMovie:{}
    };
  },
  created(){
    this.id= parseInt(this.$route.params.id)
    this.getByIdMovie(this.id)
    this.getAllMovie()
  },
  methods:{
    getByIdMovie(id){
      this.$axios.get("/api/MoviesTodays/GetMoviesToday/" + id).then((res) => {
          
        this.data = res.data;
        console.log(this.data)
      });
    },
    addOrUpdate(){
      console.log(this.data)
      this.$axios.put("/api/MoviesTodays/PutMoviesToday/"+this.id,this.data).then((response) => {
           
        });
    },
    getAllMovie(){
       this.$axios
        .get(this.$api.MOVIES_GET_ALL)
        .then((res) => {
          console.log(res.data)
          return (this.dataMovie = res.data);
          
        })
        .catch((e) => {
          console.log(e);
        });
    }


  }
};
</script>

<style>
</style>