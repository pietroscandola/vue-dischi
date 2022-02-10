<template>
  <main class="bg-main">
    <div class="container">
      <div class="cards text-center py-4">
       <Card v-for="(album, index) in albums" :key="index"  :album="album"/>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import Card from './Card.vue';
export default {
  name: "Main",
  components:{
    Card,
  },
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
