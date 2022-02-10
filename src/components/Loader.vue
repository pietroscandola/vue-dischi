<template>
    <div class="loader text-center h2 text-white">Loading...</div>
</template>

<script>
export default {
name:'Loader',
}
</script>

<style soped lang="scss">
@import "../assets/scss/_var.scss";
.loader{
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background-color: $color_gray;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>