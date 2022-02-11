<template>
  <header>
    <nav class="bg-navbar d-flex justify-content-between align-items-center">
      <img
        class="py-2 mx-5"
        src="../assets/logo-small.svg"
        alt="Spotify Logo"
      />

      <form class="mx-5">
        <label for="genere" class="text-white px-3">Scegli il genere: </label>
        <select name="genere" v-model="genere" @change ="$emit('changed', genere)">
          <option value="All">All</option>
          <option v-for="(genere, index) in filterGenre" :key="index" :value="genere">
            {{ genere}}
          </option>
        </select>
      </form>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["albums"],
  computed:{
    filterGenre(){
      const listGenres = [];
      this.albums.forEach(album => {
        if(!listGenres.includes(album.genre)) listGenres.push(album.genre);
      });
      return listGenres;   
    }
  },
  data(){
    return{
      genere: 'All',      
    }
  },
  methods:{
    
  } 
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.bg-navbar {
  background-color: $color_gray;
}

img {
  width: 3%;
  height: auto;
}
</style>
