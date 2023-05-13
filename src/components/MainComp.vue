<script>
    // importo i componenti (varie sezioni)
    import JumbotronComp from './SectionsMain/JumbotronComp.vue';
    import SectionTwoComp from './SectionsMain/SectionTwoComp.vue';
    import SectionThreeComp from './SectionsMain/SectionThreeComp.vue';
    import SectionFourComp from './SectionsMain/SectionFourComp.vue';
    import SectionFiveComp from './SectionsMain/SectionFiveComp.vue';
    import SectionSixComp from './SectionsMain/SectionSixComp.vue';
    import SectionSevenComp from './SectionsMain/SectionSevenComp.vue';
    import SectionEightComp from './SectionsMain/SectionEightComp.vue';
    import SectionNineComp from './SectionsMain/SectionNineComp.vue';

    export default {
        name: 'MainComp',
        components:{
            JumbotronComp,
            SectionTwoComp,
            SectionThreeComp,
            SectionFourComp,
            SectionFiveComp,
            SectionSixComp,
            SectionSevenComp,
            SectionEightComp,
            SectionNineComp,
        }
    }
</script>

<template>
    <main>
        <!-- jumbotron -->
        <JumbotronComp/>
        <!-- section 2 -->
        <SectionTwoComp/>
        <!-- section 3 -->
        <SectionThreeComp/>
        <!-- section 4 -->
        <SectionFourComp/>
        <!-- section 5 -->
        <SectionFiveComp/>
        <!-- section 6 -->
        <SectionSixComp/>
        <!-- section 7 -->
        <SectionSevenComp/>
        <!-- section 8 -->
        <SectionEightComp/>
        <!-- section 9 -->
        <SectionNineComp/>
    </main>
</template>

<style lang="scss" scoped>

</style>