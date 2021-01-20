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
  async data(){
      
      let table = await this.createTablet();
      return {
          table
      }
  },
  methods:{
      async createTablet() {
        let max = 4;
        let min = 1;
        let tam = 2;
        let result = []
        for(let i=0;i<max;i++){
            let res = [];
            for(let n = 0;n < tam;){
                let randomNumber = this.getRandomArbitrary(min, max);
                if(this.revisarArray(result,randomNumber)){
                    n++;
                    res.push(randomNumber);
                }
               // console.log(`Es el número ${n}`);
            }
            result.push([res]);
        } 
       /*  let result =  [[1,2,3,4],[5,2,7,8]];
        result =  [1,2,3,4,5,2,7,8];
        console.log("tamaño",this.revisarArray(result,2)); */
        return result;
      },
      getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
      /**
       * revisa dentro del array si existe mas de 2 números iguales 
       */
      revisarArray(arr, n) {
            var indices = [];
            var idx = arr.indexOf(n);
            while (idx != -1) {
                indices.push(idx);
                idx = arr.indexOf(n, idx + 1);
            }
            if(indices.length <= 2){
                return false;
            } else{
                return true;
            }  
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
