<script>
    // importo lo store js
    import { store } from '../../../store';
    // importo axios per l'API
    import axios from 'axios';


    export default {
        name: 'BookOffcanvasComp',

        data(){
            return{
                store,
            }
        },

        methods:{
            activeApiBooks(){
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${store.searchBooks}`)
                .then((res)=>{
                    if(this.store.searchBook != ''){
                        this.store.arrayBooks = res.data.items
                        console.log (this.store.arrayBooks)
                    }
                })
            }
        }
    }
</script>

<template>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasBook" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header d-flex flex-column justify-content-start align-items-start">
          <h3 class="offcanvas-title mb-3" id="offcanvasRightLabel">Books</h3>
          <div class="input-group mb-3">
              <input @keyup="activeApiBooks()" type="text" v-model="store.searchBooks" class="form-control" placeholder="Search a book">
              <span class="input-group-text" id="basic-addon2">
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </span>
          </div>
        </div>
        <div class="offcanvas-body">
            <!-- container books -->
            <div class="d-flex flex-wrap gap-2">
                <div v-for="(el,i) in store.arrayBooks" :key="i" class="card">
                    <img :src="el.volumeInfo.imageLinks.smallThumbnail" class="card-img-top" :alt="el.volumeInfo.title">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/main.scss' as *;

    #offcanvasBook{
        width: 40%;
    }
    .card{
        width: 10rem;
        cursor: pointer;
        &:hover{
            scale: 105%;
        }
    }
</style>