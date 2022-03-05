<template>
  <div class="form-horizontal">
    <div class="tag-header">
      <div>Back to list</div>
      <h4>Add new Department</h4>
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
        <label for="" class="form-label">Name Department</label>
      </div>

      <div class="form-group">
        <div class="button-form">

            <button @click="addOrUpdate" type="submit" class="btn">Add</button>
    
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
        name:'', 
      }
    }  
  },
  created(){
this.id= parseInt(this.$route.params.id)
this.getByIdDepartmen(this.id)
this
  },
  methods:{
    getByIdDepartmen(id){
      this.$axios.get("/api/Departments/GetDepartment/" + id).then((res) => {
        this.data = res.data;
      });
    },
    addOrUpdate(){
      this.$axios.put("/api/Departments/PutDepartment/"+this.id,this.data).then((response) => {
           this.getData()
            this.$router.push('/department')
        });
    },
   
    getData() {
      this.$axios
        .get(this.$api.DEPARTMENTS_GET_ALL)
        .then((res) => {
          return this.listData = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  }
};
</script>

<style>
</style>