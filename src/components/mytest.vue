<template>
  <div id="mytest">
    {{msg}}
    <p v-for="(user,i) in listObj">--id--{{user.id}}   --姓名--{{user.name}}</p>


  </div>
</template>

<script>
  export default {
    name: 'mytest',
    data () {
      return {
        msg: 'ckkjkljljjjkl',
        listObj:[
          {id:1, name:'zs1'},
          {id:2, name:'zs2'},
          {id:3, name:'zs3'},
          {id:4, name:'zs4'},
          {id:5, name:'zs5'},
          {id:6, name:'zs6'},
        ]
      }
    },
    mounted(){
      this.test();
    },
    methods:{
      //自定义方法
      test(){
      this.$axios.get("/album/findAll")
        .then(
          res=>{
            console.log(res.data);
          },
          error=>{
            console.log("err===="+err)
          })
    }
  }
  }

</script>

<style scoped>

</style>
