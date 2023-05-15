<script>
    // importo lo store js
    import { store } from '../../store';
    // importo il componente card Artist
    import cardArtistComp from './Section-six-component/cardArtistComp.vue';

    export default {
        name: 'SectionSixComp',
        components:{
            cardArtistComp
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <section class="d-flex flex-column justify-content-center align-items-center position-relative py-5">
        <div id="textSection" class="text-center mb-5">
            <span class="handWriting text-capitalize">Artist coaching</span>
            <h2>Latest online courses</h2>
        </div>
        <!-- container cards   -->
        <div class="container d-flex justify-content-between align-items-start gap-4 flex-wrap">
            <cardArtistComp v-for="(el,i) in store.cardArtistSectionSix"
            :key="i"
            :infoArtistCard="el"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;
    
</style>