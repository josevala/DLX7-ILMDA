<script>
export default {
  name: "Carousel",
  data() {
    return {
      paths: [
        "/images/map.png",
        "/images/streetEntrance.png",
        "/images/parkinkLotPath1.png",
        "/images/parkingLotPath2.png",
        "/images/mainEntrance.png",
        "/images/Lobby.png"
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

<template>
  <div id="mainCont">
    <div id="contTwo">
    <p id = "hover">2nd Parking Option: Entrance on Holder Street <br/>(Google maps usually recommends entrance on holder st.)</p>
    <img :src="paths[i]" alt="carousel image" />
    </div>
    <div id="buttons">
      <button @click="prevImage">Previous</button>
      <button @click="nextImage">Next</button>
    </div>
  </div>
</template>

<style scoped>
#mainCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}

img {
  width: 45rem;      
  height: 20rem;      
  object-fit: contain;  
  border-radius: 8px;
  margin-bottom: 10px;
  margin-left: 0%;
  margin-right: 0%;
}

#buttons{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 30%;
}

button {
  margin: 5px;
  
}
#contTwo{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#contTwo p{
  margin: 1px;
  position: absolute;
  background-color: Red;
  display: none;
}
#contTwo:hover p {
  display: block;
}
</style>