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
        <select name="genere">
          <option v-for="(album, index) in albums" :key="index" :value="album.genre" />
            {{ album.genre }}
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
  methods: {
    isGenre() {
      if (!this.albums.includes(this.albums.genre)) {
        this.albums.push(this.albums.genre);
      }
    },
  },
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
