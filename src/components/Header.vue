<template>
  <header>
      <nav class="bg-navbar">
          <img src="../assets/logo-small.svg" alt="Spotify Logo">
      </nav>
  </header>
</template>

<script>
export default {
    name:"Header",
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.bg-navbar{
    background-color: $color_gray; 
}

img{
    width:3%;
    height:auto;
    margin: 20px 30px;    
}


</style>