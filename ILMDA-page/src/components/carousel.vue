<template>
  <div class="carousel">

    <section>
      <div class="image-container">
        <p class="hover-text">
          Parking Option 2: Entrance on Holder Street <br />
          (Google Maps usually recommends this entrance)
        </p>
        <img :src="paths[i]" alt="carousel image" />
      </div>
    </section>

    <div class="buttons">
      <button @click="prevImage" :disabled="i === 0">Previous</button>
      <button @click="nextImage" :disabled="i === paths.length - 1">Next</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      paths: [
        "/DLX7-ILMDA/map.png",
        "/DLX7-ILMDA/streetEntrance.png",
        "/DLX7-ILMDA/parkinkLotPath1.png",
        "/DLX7-ILMDA/parkingLotPath2.png",
        "/DLX7-ILMDA/mainEntrance.png",
        "/DLX7-ILMDA/Lobby.png"
      ],
      i: 0
    };
  },
  methods: {
    nextImage() {
      this.i = (this.i + 1) % this.paths.length;
    },
    prevImage() {
      this.i = (this.i - 1 + this.paths.length) % this.paths.length;
    }
  }
};
</script>

<style scoped>
.carousel {
  text-align: center;
  margin-top: 1.5rem;
}

section {
  border: 2px solid #ccc;
  border-radius: 8px;
  margin: 1rem auto;
  width: 80%; /* section width */
  max-width: 800px; /* optional max width */
  color: white;
  display: flex;
  justify-content: center; /* centers content horizontally */
  background: #222;
  padding: 1rem;
}

.image-container {
  position: relative;
}

img {
  display: block; /* makes margin auto effective */
  margin: 0 auto; /* centers image */
  max-width: 100%; /* responsive */
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  background: #111;
}

.hover-text {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  display: none;
}

.image-container:hover .hover-text {
  display: block;
}

.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: center; /* centers buttons */
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #444;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background 0.3s ease;
}

button:hover {
  background: #666;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>