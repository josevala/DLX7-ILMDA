import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Instructions from "../views/InstructionsView.vue";
import Directions from "../views/DirectionsView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: HomeView},
    {path: "/instructions", component: Instructions},
    {path: "/directions", component: Directions}
  ],
})

export default router
