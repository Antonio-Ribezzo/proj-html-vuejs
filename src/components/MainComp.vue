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
    // importo i componenti per gli offcanvas
    import cartOffcanvasComp from './SectionsMain/Offcanvas-components/cartOffcanvasComp.vue';
    import BookOffcanvasComp from './SectionsMain/Offcanvas-components/BookOffcanvasComp.vue';
    import GlobeoffcanvasComp from './SectionsMain/Offcanvas-components/GlobeoffcanvasComp.vue';
    import ruleOffcanvasComp from './SectionsMain/Offcanvas-components/ruleOffcanvasComp.vue';

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
            cartOffcanvasComp,
            BookOffcanvasComp,
            GlobeoffcanvasComp,
            ruleOffcanvasComp,
        }
    }
</script>

<template>
    <main>
        <!-- Offcanvas-->
        <div id="offcanvas" class="position-fixed bg-white rounded-start d-flex flex-column justify-content-around align-items-center p-1">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRule">
                <font-awesome-icon :icon="['fas', 'ruler-combined']"/>
            </button>
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasGlobe">
                <font-awesome-icon :icon="['fas', 'globe']"/>
            </button>
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasBook">
                <font-awesome-icon :icon="['fas', 'book']"/>
            </button>
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart">
                <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
            </button>
            <cartOffcanvasComp/>
            <BookOffcanvasComp/>
            <GlobeoffcanvasComp/>
            <ruleOffcanvasComp/>
        </div>
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
    @use '../style/main.scss' as *;
    
    #offcanvas{
        top: 10rem;
        right: 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        z-index: 9999999999999;
        button{
            margin: 0.5rem 0;
            color: $fontColorBrands;
            background-color: white;
            border: none;
            &:hover{
                scale: 120%;
                color: $MainColor;
            }
        }
    }

</style>