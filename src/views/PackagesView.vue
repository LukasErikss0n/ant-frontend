<template>
  <div class="px-6 py-12">
    <h1 class="text-2xl font-semibold text-foreground text-center mb-10">
      Explore and discover packages
    </h1>
    <p v-if="store.loading" class="text-muted-foreground text-sm text-center">
      Loading...
    </p>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 gap-4"
      style="display: flex; justify-content: center"
    >
      <PackageCard v-for="pkg in store.packages" :key="pkg.id" :pkg="pkg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePackageStore } from "@/stores/packageStore";
import PackageCard from "@/components/PackageCard.vue";

const store = usePackageStore();
onMounted(() => store.fetchPackages());
</script>
