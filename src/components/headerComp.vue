<script>
    // importo lo storejs
    import { store } from '../store';
    
    export default {
        name: 'HeaderComp',
        data(){
            return{
                store,
            }
        },
        mounted(){
            this.countDown()
        },

        methods:{
            countDown(){
                //set the date I'm counting down
                let countDownDate = new Date("Jun 30, 2023, 12:00:00").getTime();
                //every 1 second update the date
                let interval = setInterval(function(){
                    // get today date and time
                    let nowDate = new Date().getTime();
                    // subtraction of today and countDownDate
                    let distance = countDownDate - nowDate;
                    // time calculation for days, hours, minutes and seconds
                    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    // inner Html
                    document.querySelector('#countDown').innerHTML = days + ": " + hours + ": " + minutes + ": " + seconds;
                    // if countdown finish
                    if(distance < 0){
                        clearInterval(interval);
                        element.innerHTML = 'FINISHED'
                    }
                }, 1000)
            }
        }
    }
</script>

<template>
    <header>
        <!-- header-up -->
        <div id="headerUp" class="d-flex justify-content-center align-items-center py-2">
            <div>
                <p class="my-0 me-3 text-secondary">Starts TOMORROW! Our biggest event of the year...</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <font-awesome-icon :icon="['far', 'clock']" class="me-3"/>
                <span id="countDown" class="me-3"></span>
            </div>
            <button class="buttonOne">Get ticket</button>
        </div>
        <!-- header-down -->
        <div id="headerDown" class="container d-flex justify-content-between align-items-center py-4 px-0">
            <!-- main logo -->
            <div>
                <img src="/img/dark-logo.png" alt="logo-Max-Coach">
            </div>
            <!-- navigation -->
            <nav>
                <ul class="d-flex m-0 p-0">
                    <li v-for="(el,i) in this.store.navItem" :key="i" class="nav-item dropdown mx-3">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ el.name }}
                      </a>
                      <ul class="dropdown-menu">
                        <li v-for="(el,i) in this.store.navItem[i].contents" :key="i"><a class="dropdown-item" href="#">{{el}}</a></li>
                      </ul>
                    </li>
                </ul>
            </nav>
            <!-- social logos -->
            <div id="socialLogos">
                <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" class="me-3"/></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" class="me-3"/></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" class="me-3"/></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

    @use '../style/main.scss' as *;

    header{

        #headerUp{
            background-color: $colorHeaderUp;
            div{
                p{
                    font-size: 0.8rem;
                }
            }
            div{
                #countDown{
                    font-family: "Lilita One", cursive;
                    font-weight: 200;
                }
            }
        }

        #headerDown{
            background-color: $colorHeaderDown;
            font-family: "Quicksand", sans-serif;
            font-weight: 900;
            div{
                img{
                    height: 2rem;
                }
            }
            nav{
                ul{
                    li{
                        &:hover{
                            text-decoration: underline;
                            color: $MainColor;
                        }
                    }
                }
            }
            #socialLogos{
                a{
                    color: $fontColorBrands;
                    &:hover{
                        color: $MainColor;
                    }
                }
            }
        }
    }

</style>