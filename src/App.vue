<script>
  import HeaderComp from './components/headerComp.vue';

  export default{
    name: 'App',
    components:{
            HeaderComp
        }
  }

</script>

<template>
  <HeaderComp/>

  
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;

</style>
