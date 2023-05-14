<script>
    // importo lo store js
    import { store } from '../../store';
    // importo il componente card
    import cardAvatarComp from './Section-five-component/cardAvatarComp.vue';

    export default {
        name: 'SectionFiveComp',
        components:{
            cardAvatarComp
        },

        // mounted(){
        //     this.changeCard()
        // },

        data(){
            return{
                store,
            }
        },
        methods:{
            changeCounter(i){
                this.store.counter = i
            }
        }
    }
</script>

<template>
    <section class="d-flex flex-column justify-content-center align-items-center position-relative py-5">
        <div id="textSection" class="text-center mb-3">
            <span class="handWriting text-capitalize">testimonials</span>
            <h2>Why do people love me?</h2>
        </div>
        <!-- container cards   -->
        <div class="d-flex justify-content-between align-items-center gap-4">
            <cardAvatarComp v-for="(el,i) in store.cardInfoSectionFive"
            :key="i"
            :infoAvatar="el"
            @click="changeCounter(i)"
            :class="(store.counter === i)? 'active': ''"/>
        </div>
        <!-- dot for selection -->
        <div class="my-3">
            <span v-for="n in 3" class="dot me-2" 
            :class="(store.counter === (n - 1))? 'dotSelected': ''"
            @click="changeCounter(n-1)">
            </span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;
    section{
        background-color: $bgSectionFiveMain;
    }
</style>