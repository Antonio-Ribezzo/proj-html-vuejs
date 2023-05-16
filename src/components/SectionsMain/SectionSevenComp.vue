<script>
    // importo lo store
    import { store } from '../../store';

    export default {
        name: 'SectionSevenComp',
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <section class="d-flex flex-column justify-content-center align-items-center position-relative py-5 position-relative">

        <!-- section title -->
        <div class="text-center mb-5">
            <span class="handWriting text-capitalize">Articles and Tips</span>
            <h2 class="text-capitalize">latest from the blog</h2>
        </div>
        <!-- container cards   -->
        <div class="container d-flex justify-content-between align-items-start gap-4 flex-wrap position-relative">

            <!-- First card Event -->
            <div class="container0 d-flex flex-column justify-content-start align-items-start bg-white rounded align-self-end mb-5">
                <!-- image artist course -->
                <div class="containerImage">
                    <img class="img-fluid" :src="store.cardEventsSectionSeven[0].urlEvent" :alt="store.cardEventsSectionSeven[0].title">
                </div>
                <!-- container info course -->
                <div class="p-4">
                    <span class="text-uppercase">artist</span>
                    <h4 class="mt-3">{{ store.cardEventsSectionSeven[0].title }}</h4>
                    <div class="containerInfo d-flex justify-content-start      align-items-center mt-3">
                        <!-- date -->
                        <div class="d-flex align-items-center me-4">
                            <font-awesome-icon :icon="['far', 'calendar']" />
                            <span class="ms-2">{{ store.cardEventsSectionSeven[0].date }}</span>
                        </div>
                        <!-- views -->
                        <div class="d-flex align-items-center">
                            <font-awesome-icon :icon="['fas', 'eye']" />
                            <span class="ms-2">{{ store.cardEventsSectionSeven[0].views }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second card Event -->
            <div id="imagePrimary-Sec7" class="position-relative align-self-center mb-5">
                <img class="img-fluid" :src="store.cardEventsSectionSeven[1].urlEvent" :alt="store.cardEventsSectionSeven[1].title">
                <div class="containerInfoEvent p-4 position-absolute">
                    <span class="text-uppercase text-white">artist</span>
                    <h4 class="mt-3">{{ store.cardEventsSectionSeven[1].title }}</h4>
                    <div class="containerInfo2 d-flex justify-content-start  align-items-center mt-3">
                        <!-- date -->
                        <div class="d-flex align-items-center me-4">
                            <font-awesome-icon :icon="['far', 'calendar']" />
                            <span class="ms-2">{{ store.cardEventsSectionSeven[1].date }}</span>
                        </div>
                        <!-- views -->
                        <div class="d-flex align-items-center">
                            <font-awesome-icon :icon="['fas', 'eye']" />
                            <span class="ms-2">{{ store.cardEventsSectionSeven[1].views }}</span>
                        </div>
                    </div>
                </div>
                <svg id="shape03-Sec7" class="position-absolute" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#B2E0F6" d="M23.1,-34.2C35.5,-32.8,55.1,-38,67.3,-33.4C79.5,-28.8,84.2,-14.4,83.2,-0.6C82.2,13.2,75.5,26.5,67.8,38.8C60.1,51.1,51.4,62.5,39.9,66.1C28.5,69.6,14.2,65.2,-1.2,67.3C-16.6,69.3,-33.3,77.9,-45,74.5C-56.8,71.2,-63.7,56,-67.9,41.6C-72,27.2,-73.5,13.6,-75.1,-1C-76.8,-15.5,-78.6,-31,-73.5,-43.8C-68.5,-56.6,-56.4,-66.7,-43,-67.6C-29.6,-68.5,-14.8,-60.1,-4.7,-51.9C5.3,-43.7,10.6,-35.7,23.1,-34.2Z" transform="translate(100 100)" />
                </svg>
            </div>


            <!-- Third card Event -->
            <div class="container0 d-flex flex-column justify-content-start align-items-start bg-white rounded align-self-start mt-5">
                <!-- image artist course -->
                <div class="containerImage">
                    <img class="img-fluid" :src="store.cardEventsSectionSeven[2].urlEvent" :alt="store.cardEventsSectionSeven[2].title">
                </div>
                <!-- container info course -->
                <div class="p-4">
                    <span class="text-uppercase">artist</span>
                    <h4 class="mt-3">{{ store.cardEventsSectionSeven[2].title }}</h4>
                    <div class="containerInfo d-flex justify-content-start      align-items-center mt-3">
                        <!-- date -->
                        <div class="d-flex align-items-center me-4">
                            <font-awesome-icon :icon="['far', 'calendar']" />
                            <span class="ms-2">{{ store.cardEventsSectionSeven[2].date }}</span>
                        </div>
                        <!-- views -->
                        <div class="d-flex align-items-center">
                            <font-awesome-icon :icon="['fas', 'eye']" />
                            <span class="ms-2">{{ store.cardEventsSectionSeven[2].views }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- background images -->
        <img id="shape01-Sec7" class="position-absolute" src="/img/maxcoach-shape-03.png" alt="maxcoach-shape-03-bg">
        <div id="ring2-Sec7" class="position-absolute ringShape"></div>
        <img id="shape02-Sec7" class="position-absolute" src="/img/maxcoach-shape-12.png" alt="shape-12-maxcoach">

        <!-- link -->
        <div id="containerSpan-Sec7" class="mt-5">
            <span class="colorBrands">Get into details now?</span>
            <a href="#">
                <span id="linkPost-Sec7" class="mt-5 mb-3">
                View all posts
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </span>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/main.scss' as *;

    section{
        // height: 50rem;
        background-color: $bgSectionSevenMain;

        #shape01-Sec7{
            right: 0;
            // object-position: 3rem;
            top: 10rem;
        }

        #ring2-Sec7{
            top: 5rem;
            left: 10rem;
        }

        #shape02-Sec7{
            top: 10rem;
            left: 35rem;
        }

        #shape03-Sec7{
            scale: 250%;
            top: 30rem;
            left: 20rem;
            z-index: -1;
        }

        #containerSpan-Sec7{
            font-size: 0.8rem;
            a{
                text-decoration: none;
            }
            #linkPost-Sec7{
                color: $MainColor;
                font-weight: bold;
                &:hover{
                    color: $colorButtonBlue;
                }
            }
        }

        .container{
            z-index: 999999999;
            // height: 50rem;
            .container0{
                width: 20rem;
                scale: 70%;
                // width: 10rem;
                cursor: pointer;
                &:hover{
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0,  0.19);
                    scale: 100%;
                }
    
    
                h4{
                    font-size: 1.3rem;
                    font-weight: bold;
                }
                .containerInfo{
                    width: 85%;
                    div{
                        font-size: 0.8rem;
                        color: $fontColorBrands;
                    }
                }
            }
        }
    }

    #imagePrimary-Sec7{
        width: 25rem;
        cursor: pointer;
        .containerInfoEvent{
            bottom: 0;
            color: white;
            width: 80%;
            .containerInfo2{
                font-size: 1rem;
                color: white;
                span{
                    color: white;
                }
            }
        }
        &:hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0,  0.19);
            scale: 105%;
        }
    }
</style>