<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav>
    <ul>
      <li class="logCont">
        <img src="./assets/Amazon Logo white.jpg">
      </li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/instructions">Instructions</router-link></li>
      <li><router-link to="/directions">Directions</router-link></li>
    </ul>
  </nav>
</template>

<style>
nav {
  width: 100%;
  background: #35495e;
  padding: 1rem;
  border-radius: 8px;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  align-content: center;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}

nav li {
  display: inline;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #35495e;
}

img {
  border-radius: 9px;
  height: 40px;
  width: auto;
}

.logCont {
  display: flex;
  height: 100%;
  
}
</style>