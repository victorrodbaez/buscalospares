<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col">
        <level/>
         <!--  <Level :dataButton="dataButton" v-on:init_game="startGame" v-if="active" /> -->
         <!--  <Tablet v-if="!active" /> -->
         <tablet level=2 />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Level from "@/components/level.vue";
import Tablet from '@/components/tablet.vue';

export default {
  name: "Home",
  components: {
    Level,
    Tablet
  },
  props: ['item']
  ,
    data() {
        let dataButton = [this.item] 
        dataButton = [
            {
              id:null,
              text:"",
              level:null
            }
          ]
          console.log(this.dataButton);
        return {
          dataButton,
          active:Boolean,
          level:Number
        }
    },
  methods: {
      startGame(datos) {
        console.log(datos);
        this.active = !this.active;
        this.level = datos;
      },
      menu() {
         this.dataButton = [
            {
              id:1,
              text:"Nivel fácil",
              level:2
            },
            {
              id:2,
              text:"Nivel medio",
              level:4
            },
            {
              id:3,
              text:"Nivel dificil",
              level:8
            },
          ]
         console.log(this.dataButton)
         }
   },
  mounted() {
    this.menu();
  }
};
</script>
