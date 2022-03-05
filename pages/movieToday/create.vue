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
          v-model="data.movies_Id"
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
      data:{
        id:'',
        movie:null,
        movies_Id:null,
        showTime:'2022-02-28T04:24:27.019',
        showDate:'2022-02-28T00:00:00',
      },
    };
  },
  created(){

  },
  methods:{
      addOrUpdate(){
          this.$axios.post(this.$api.MOVIETODAY_CREATE,this.data).then((response)=>{
              console.log()
          })
      }
   

  }
};
</script>

<style>
</style>