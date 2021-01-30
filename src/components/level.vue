<template>
<div class="container"  v-if="dataButton">
  <div class="row">
    <div class="col-12 mt-2"  v-for="item of dataButton" :key="item.id"> 
      <button type="button" class="btn btn-primary" @click="startGame(item.level,false)">{{item.text}}</button>
    </div>
  </div>
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
      // console.log(this.dataButton) 
    }
  },
  methods: {
      startGame(level,active) {
         this.$emit('init_game', level,active);
      },
      datos(){
         // console.log(this.dataButton) 
      }
   }, mounted() {
    this.datos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
