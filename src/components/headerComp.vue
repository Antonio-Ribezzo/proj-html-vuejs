<script>
    // importo lo storejs
    import { store } from '../store';
    
    export default {
        name: 'HeaderComp',
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <header>
        <div id="headerUp" class="d-flex justify-content-center align-items-center py-2">
            <div>
                <p class="my-0 me-3 text-secondary">Starts TOMORROW! Our biggest event of the year...</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <font-awesome-icon :icon="['far', 'clock']" class="me-3"/>
                <span class="me-3">00 : 00 : 00 : 00</span>
            </div>
            <button class="buttonOne">Get ticket</button>
        </div>
        <div id="headerDown" class="container d-flex justify-content-between align-items-center py-4 px-0">
            <!-- main logo -->
            <div>
                <img src="../../public/img/dark-logo.png" alt="logo-Max-Coach">
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
                <font-awesome-icon :icon="['fab', 'twitter']" class="me-3"/>
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="me-3"/>
                <font-awesome-icon :icon="['fab', 'instagram']" class="me-3"/>
                <font-awesome-icon :icon="['fab', 'linkedin']" />
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
                    font-family: "Quicksand", sans-serif;
                    color: $fontColorBrands;
                }
            }
            div{
                span{
                    font-weight: bold;
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
            #socialLogos{
                color: $fontColorBrands;
            }
        }
    }

</style>