<template>
  <main class="bg-main">
    <div class="container">
      <Loader v-if="isLoading" />
      <div v-if="filterGenre.length === 0" class="cards text-center py-4">
        <Card
          v-for="(album, index) in albums"
          :key="index"
          :album="album"
        />
      </div>

      <div class="cards text-center py-4">
        <Card
          v-for="(album, index) in filterGenre"
          :key="index"
          :album="album"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Card from "./Card.vue";
import Loader from "./Loader.vue";
export default {
  name: "Main",
  components: {
    Card,
    Loader,
  },
  props: ["albums", "newGenres"],
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    filterGenre() {
      const newFilterAlbums = [];
      this.albums.forEach((album) => {
        if (album.genre === this.newGenres) {
          newFilterAlbums.push(album);
        }
      });
      return newFilterAlbums;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.bg-main {
  background-color: #1e2d3b;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  .card {
    width: calc(100% / 5 - 40px);
    margin: 20px;
    background-color: $color_gray;
    img {
      width: 80%;
      height: auto;
    }
  }
}
</style>
