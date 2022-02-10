<template>
  <main class="bg-main">
    <div class="container">
      <div class="cards text-center">
        <div v-for="(album, index) in albums" :key="index" class="card py-3">
          <figure class="d-flex justify-content-center">
            <img :src="album.poster" :alt="album.title" class="img-fluid" />
          </figure>
          <h5 class="text-white">{{ album.title.toUpperCase() }}</h5>
          <div class="my-3">
            <p class="text-secondary">{{ album.author }}</p>
            <p class="text-secondary">{{ album.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",
  data() {
    return {
      albums: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.albums = res.data.response;
      });
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
