import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PackagesView from "../views/PackagesView.vue";
import PackageDetailView from "../views/PackageDetailView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: 'home', component: HomeView },
    { path: "/packages", name: 'packages', component: PackagesView },
    { path: "/packages/:id", name: 'package-detail', component: PackageDetailView },
    { path: "/packages/:id/:version", name: 'package-version', component: PackageDetailView },
  ],
});

export default router;
