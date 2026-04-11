import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PackagesView from "../views/PackagesView.vue";
import PackageDetailView from "../views/PackageDetailView.vue";
import SupportView from "../views/SupportView.vue";
import CompanyView from "../views/CompanyView.vue";
import LegalView from "../views/LegalView.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    { path: "/", name: 'home', component: HomeView },
    { path: "/packages", name: 'packages', component: PackagesView },
    { path: "/packages/:id", name: 'package-detail', component: PackageDetailView },
    { path: "/packages/:id/:version", name: 'package-version', component: PackageDetailView },
    { path: "/support", name: 'support', component: SupportView },
    { path: "/about", name: 'about', component: CompanyView },
    { path: "/legal", name: 'legal', component: LegalView },
  ],
});

export default router;
