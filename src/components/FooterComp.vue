<script>
    import { store } from '../store';
    export default {
        name: 'FooterComp',
        data(){
            return{
                store,
            }
        },
        methods:{
            scrollUpFunction(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        }
    }
</script>

<template>
    <footer class="container px-0 py-5 position-relative">
        <div class="d-flex justify-content-between align-items-start mb-5">
            <!-- address and social -->
            <div id="address" class="d-flex flex-column justify-content-start align-items-start">
                <h5 class="mb-3">Address</h5>
                <span v-for="(el,i) in store.contactsInfo" :key="i" class="mb-2">{{ el }}</span>
                <!-- social Logos -->
                <div id="socialLogos-Footer" class="mt-2">
                    <a href="#"><font-awesome-icon :icon="['fab', 'square-facebook']" class="me-3"/></a>
                    <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" class="me-3"/></a>
                    <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" class="me-3"/></a>
                    <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
                </div>
            </div>
            <!-- footer nav  -->
            <div v-for="(el,index) in store.navFooterItem" :key="index" class="d-flex justify-content-start align-items-start">
                <div class="me-5">
                    <h5 class="mb-3">{{ el.name }}</h5>
                    <ul v-for="(el,i) in store.navFooterItem[index].contents" :key="i" class="p-0 my-2">
                        <li>
                            <a href="#">
                                <span>{{ el }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- instagram -->
            <div>
                <h5 class="mb-3">Instagram
                    <span id="mailSpan" class="mailColor">@maxcoach</span>
                </h5>
                <!-- images -->
                <div id="imagesFooter">
                    <img src="/img/artist-blog-00.jpg" alt="artist-blog-00" class="me-3">
                    <img src="/img/paint.jpg" alt="photo-painting" class="me-3">
                    <img src="/img/artist-event-02-250x300.jpg" alt="event-04-artist">
                </div>

            </div>
        </div>
        <!-- copyright -->
        <div id="copyright" class="d-flex justify-content-center align-items-center pt-5">
            <span>
                <font-awesome-icon :icon="['far', 'copyright']" />
                2020 Maxcoach. All Rights Reserved
            </span>
        </div>

        <!-- arrow scroll up -->
        <div id="arrowScrollUp" class="position-absolute d-flex justify-content-center  rounded-circle px-3 py-2" @click="scrollUpFunction()">
            <span>
                <font-awesome-icon class="text-white" :icon="['fas', 'arrow-up-long']" />
            </span>
        </div>
        
    </footer>
</template>

<style lang="scss" scoped>

    @use '../style/main.scss' as *;

    h5{
        font-weight: bold;
    }
    span{
        color: $fontColorBrands;
        font-size: 0.8rem;
        &:hover{
            color: black;
            text-decoration: underline;
        }
    }

    #socialLogos-Footer{
        a{
            color:$colorFooterSpan;
            font-size: 1.4rem;
        }
    }

    a{
        text-decoration: none;
    }

    #mailSpan{
        font-size: 1rem;
    }


    #imagesFooter{
        img{
            height: 7rem;
            cursor: pointer;
            &:hover{
                scale: 120%;
            }
        }
    }

    #copyright{
        span{
            font-size: 0.7rem;
        }
    }

    #arrowScrollUp{
        background-color: $MainColor;
        bottom: 2rem;
        right: -4rem;
        cursor: pointer;
        span{
           font-size: 1rem;
        }
        &:hover{
            scale: 120%;
            background-color: $colorButtonBlue;
        }
    }


</style>