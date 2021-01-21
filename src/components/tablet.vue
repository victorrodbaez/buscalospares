<template>
    Soy el tablero. Nivel {{level}}
    <div class="container" v-if="table">
        <div class="row"   v-for="items of table" :key="items.id">
            <div class="col"  v-for="item of items" :key="item.id">
                    {{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Tablet",
  props: {
    level:Number
  },
  data(){
      
      let table = this.createTablet();
      return {
          table
      }
  },
  methods:{
      createTablet(tam) {
        tam = 8;
        let result = [];
       result.push(this.createArray(tam).concat(this.createArray(tam)));
       result = this.shuffle(result[0]);
       return this.boardStructure(result);
      },
      /**
       * Crea el array para que sirva de tablero
       * tam = Cantidad de cartas iguales
       */
      createArray(tam){
        let arr = [];
        for(let i=0;i<tam;i++){arr.push(i)};
        return arr;
      },
      /**
       * Desordena array
       */
      shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        return arr;
      },
      boardStructure(arr){
          console.log(arr);
        let e = 0;
        let res = []
        let element = []
        for(let i = 0;i <= arr.length; i++) {
            element.push(arr[i]);
            e++;
            if(e === 4){
                res.push(element);
                element = [];
                e = 0;
            }
        }
        console.log(res)
        return res;
      }
  },
  mounted(){
      // this.createTablet();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
