<template>
  <div id="app">
    <Header :albums="albums" @changed="getAlbumsRemaning"/>
    <Main :albums="albums" :newGenres="newGenres"/>
  </div>
</template>

<script>
import axios from "axios";
import Header from  "./components/Header.vue";
import Main from "./components/Main.vue"

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data(){
    return{
      albums:[],
      newGenres: '',
    }
  },

  methods:{
    getAlbums(){
      this.isLoading = true,
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.albums = res.data.response;
        this.isLoading = false;
      });
    },

    getAlbumsRemaning(genere){
      return this.newGenres=genere      
    },
  },

  mounted() {
    this.getAlbums() 
  },
};
</script>

<style lang="scss">
@import "assets/scss/style.scss"
</style>
