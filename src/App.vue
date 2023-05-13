<script>
  // importo i componenti
  import HeaderComp from './components/headerComp.vue';
  import MainComp from './components/MainComp.vue';
  import FooterComp from './components/FooterComp.vue';

  export default{
    name: 'App',
    components:{
            HeaderComp,
            MainComp,
            FooterComp
        }
  }

</script>

<template>
  <!-- header -->
  <HeaderComp/>

  <!-- main -->
  <MainComp/>

  <!-- footer -->
  <FooterComp/>


  
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;

</style>
