<template>
  <div class="app">
    <Main/>
    <Loader v-if="loader.show"/>
    <Basket v-if="basket.show"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  const Main = () => import('./views/Main')
  const Loader = () => import('./components/Loader')
  const Basket = () => import('./components/Basket')


  export default {
    name:'App',
    components:{
      Main,Loader,Basket
    },
    computed:{
      ...mapGetters(['basket','loader'])
    },
    watch:{
      basket:{
        handler(basket){
          if (basket.show) document.body.style.overflow = 'hidden';
          else document.body.style.overflow = 'visible';
        },
        deep:true
      },
    },
  }
</script>



<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body::-webkit-scrollbar { width: 0; }
</style>

<style scoped>
  .app {
    min-height: 100vh;
    background: #E7F6FF;
    padding-top: 85px;
  }

</style>
