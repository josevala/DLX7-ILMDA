<template>
  <div id="Container">
    <h1>Directions</h1>
    <h3>There will be two sections where New Hires are allowed to park their personal vehicles.
      <br/>
       Parking spaces closer to the entrance are always full by 7:30,
        be prepared to park a minute or two walking distance from the main entrance.</h3>
       <h4> Parking Option 1: Enter lot between Hope and Holder Street to access general parking lot. Please see the photos below.</h4> 
    <Carousel/>
  </div>
</template>

<script>
import Carousel from '@/components/carousel.vue';
export default {
  name: "DirectionsView",
  components: {
    Carousel
  }
};
</script>

<style scoped>
 #container{
 display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
 }
 
</style>