import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: 'home', component: HomeView },
    { path: "/packages", name: 'packages', component: () => import("../views/PackagesView.vue") },
    { path: "/packages/:id", name: 'package-detail', component: () => import("../views/PackageDetailView.vue") },
    { path: "/packages/:id/:version", name: 'package-version', component: () => import("../views/PackageDetailView.vue") },
    { path: "/profile", name: 'profile', component: () => import("../views/ProfileView.vue") },
    // { path: "/about", component: AboutView },
  ],
});

export default router;
