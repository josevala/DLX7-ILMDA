<script>
import Carousel from "@/components/carousel.vue";
export default {
  name: "DirectionsView",
  components: {
    Carousel,
  },
};
</script>
<template>
      <h1>Directions</h1>

  <div id="container">

    <h3>
      There will be two sections where New Hires are allowed to park their personal vehicles.
      <br />
      Parking spaces closer to the entrance are always full by 7:30,
      be prepared to park a minute or two walking distance from the main entrance.
    </h3>

    <h4>
      Parking Option 1: Enter lot between Hope and Holder Street to access general parking lot.
      Please see the photos below.
    </h4>

    <Carousel />
  </div>
</template>



<style scoped>
#container {
  width: 75%;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 12px;
  background: #222;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  text-align: center;
}

h1 {
  margin-bottom: 1rem;
}

h3, h4 {
  margin: 1rem 0;
  font-weight: normal;
}

@media (max-width: 480px) {
  #container {
    width: 80%;
    padding: 1rem;
  }
}
</style>