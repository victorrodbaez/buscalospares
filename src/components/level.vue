<template>
<div  v-if="dataButton">
 <div v-for="item of dataButton" :key="item.id">
    {{item}}
    <button type="button" class="btn btn-primary" @click="startGame(item.level)">{{item.text}}</button>
 </div>
  <!--  -->
</div>
</template>

<script>
export default {
  name: "Level",
  props: {
    dataButton: Object
  },
  watch: {
    dataButton:function () {
      console.log(this.dataButton) 
    }
  },
  methods: {
      startGame(parametros) {
         this.$emit('init_game', parametros);
      },
      datos(){
         console.log(this.dataButton) 
      }
   }, mounted() {
    this.datos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
