<script>
    // importo lo store js
    import { store } from '../../store';

    export default {
        name: 'SectionFiveComp',
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <section>
        <h2>Section 5</h2>       
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;
    section{
        background-color: $bgSectionFiveMain;
    }
</style>