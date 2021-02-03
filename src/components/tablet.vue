<template> 
<h1>{{text}}</h1>
    <div class="container" v-if="table">
      
        <div class="row"   v-for="items of table" :key="items.id">
            <div class="col"  v-for="item of items" :key="item.id">
                <img src="../assets/DORSO_ROJO.jpg" alt="" @click="pushCard(item,$event)" width="50" height="100" srcset="">
            </div>
        </div>
        <div class="row">
          <div class="col-12">
           
            <p>Puntuación: {{punt}}</p>
          </div>
          <div class="col-12">
           <div v-html="result"></div>
          </div>
        <div class="col-12">
          <p>Si quieres jugar otro nivel pulsa aquí</p>
          <input type="button" class="btn btn-primary" @click="goBack(true)" value="Atrás">
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Tablet",
  props: {
    level:Number,
    actualCard:Number,
    lastPosCard:Object,
    domROJOCard:Object,
    puntuation:Number,
    text:String
  },
  data(){
      let lastPos = this.lastPosCard;
      let domCard = this.domROJOCard;
      let tam = this.level;
      let table = this.createTablet(tam);
      let card  = this.actualCard;
      let punt = this.puntuation;
      let result = "";
      return {
          table,
          card,
          lastPos,
          domCard,
          punt,
          result
      }
  },
  methods:{
    goBack(level,active) {
         this.$emit('go_back', level,active);
      },
      createTablet(tam) {
        /* tam = 8;
        this.tam = 8; */
        this.tam = tam;
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
        for(let i=1;i<tam + 1;i++){arr.push(i)};
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
        return res;
      },
      /**
       * Traemos la carta como un DOM. Y lo parseamos
       */
      bringCard(item){
        let src;
        if(item === 1){
          src = '1.5677e9a7.jpg';
        } 
        else if(item === 2) {
          src = '2.76b129dc.jpg'
        } 
        else if(item === 3) {
          src = '3.e0ac1b2c.jpg'
        }
        else if(item === 4) {
          src = '4.df731ff6.jpg'
        }
        else if(item === 5) {
          src = '5.b9e177a7.jpg'
        }
        else if(item === 6) {
          src = '6.52bfaeaf.jpg'
        }
        else if(item === 7) {
          src = '7.ddd8ccf9.jpg'
        }
        else if(item === 8) {
          src = '8.1d3792d6.jpg'
        }
        else if(item === 9) {
          src = '9.55d60771.jpg'
        }
        else if(item === 10) {
          src = '10.fdad0bf0.jpg'
        }
        else if(item === 11) {
          src = '11.e12048b3.jpg'
        }
        else if(item === 12) {
          src = '12.dcfd3086.jpg'
        }
        else if(item === 13) {
          src = '13.28529027.jpg'
        }
        else if(item === 14) {
          src = '14.33ba1ba4.jpg'
        }
        else if(item === 15) {
          src = '15.c7a47764.jpg'
        }
        else if(item === 16) {
          src = '16.f3213727.jpg'
        }
                
          let card = this.parserHtml(`<img  src="/img/${src}" width="50" height="100" srcset="">`);
          return card;
      },
      parserHtml(element){
          let parser = new DOMParser();
          return parser.parseFromString(element,"text/html").body.firstChild;
      },
      pushCard(item,event){
          /* console.log(this.card);
          console.log("Traigo el evento y el elemento",event.target.parentNode); */
          if(!this.card){
             if(this.lastPos){
                this.lastPos.replaceChild(this.domCard,this.lastPos.firstChild);
                this.lastPos = undefined;
                this.domCard = undefined;
              } 
              this.result = "<h4>¡Ánimo!</h4> <b>Escoge otra carta</b>";
              this.lastPos = event.target.parentNode;
              this.domCard = event.target;
              // Trae al padre parentNode
              // Funciona event.target.innerHTML = "asdas";
              let card = this.bringCard(item);
              this.lastPos.replaceChild(card,event.target);
              this.card = item;
          } else if(this.card === item) {
              this.result = "<h4>¡Correcto!</h4> <b>¡Vas muy bien!</b>";
              let card = this.bringCard(item);
              event.target.parentNode.replaceChild(card,event.target);
              this.lastPos = undefined
              ;
              this.card = undefined;
              this.punt = this.punt + 1;
              if(this.punt === this.tam){
                this.result = "<h1><b>¡¡Ganaste!!</b></h1>";
              }
          } else {
              this.result = "<h4>¡Casi!</h4> Prueba de nuevo.</br> Pulsa otra carta para poder seleccionar de nuevo.</br>";
              this.lastPos.replaceChild(this.domCard,this.lastPos.firstChild);
              this.domCard = event.target;
              let card = this.bringCard(item);
              this.lastPos = event.target.parentNode;
              this.lastPos.replaceChild(card,event.target);
              this.card = undefined;
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
