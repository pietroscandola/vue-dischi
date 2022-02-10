<template>
  <div class="card py-3">
    <figure class="d-flex justify-content-center">
      <img :src="album.poster" :alt="album.title" class="img-fluid p-3" />
    </figure>
    <h5 class="text-white">{{ album.title.toUpperCase() }}</h5>
    <div class="my-3">
      <p class="text-secondary">{{ album.author }}</p>
      <p class="text-secondary">{{ album.year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["album"],
};
</script>

<style></style>
