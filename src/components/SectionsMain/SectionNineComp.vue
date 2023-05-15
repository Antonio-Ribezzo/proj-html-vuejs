<script>
    export default {
        name: 'SectionNineComp'
    }
</script>

<template>
    <section class="d-flex justify-content-between align-items-center">
        <div class="containerNews d-flex justify-content-between align-items-center">
            <h3 class="mailSectionFont text-end text-white m-0">Newsletter to get in touch</h3>
            <!-- input email -->
            <div class="group-input d-flex justify-content-between">
                <input type="text" class="" placeholder="Your e-mail">
                <button class="" type="button" id="button-addon2">
                    <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                </button>
            </div>
            <!-- <input type="text"> -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;
    section{
        height: 10rem;
        background: url('/img/artist-shape-color-paint-top-left-300x170.png') left bottom no-repeat, url("/img/artist-shape-color-paint-bottom-right-300x153.png") right bottom no-repeat;
        background-color: $bgSectionMailMain;
        .containerNews{
            margin: 0 auto;
            width: 50%;
            h3{
                width: 20%;
            }
            .group-input{
                width: 70%;
                background-color: $bgSectionMailMain;
                border-bottom: 1px solid white;
                input{
                    width: 100%;
                    color: white;
                    background-color: $bgSectionMailMain;
                    border: none;
                    &::placeholder { 
                        color: white;
                        opacity: 1; 
                    }
                }
                button{
                    background-color: $bgSectionMailMain;
                    color: white;
                    font-size: 1.5rem;
                    border: none;
                    &:hover{
                        background-color: #4766acb2;
                    }
                }
            }
        }
    }
</style>