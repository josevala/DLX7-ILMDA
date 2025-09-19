<script setup >
import NavBar from "../src/NavBar.vue"
import carousel from "./components/carousel.vue";

</script>
<template>
  <div id="app"> 
   <header>
    <NavBar></NavBar>
   </header> 
    <router-view />
</div>
</template>

<style scoped>
 header{
  position: sticky;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
