<template>
  <div class="px-6 py-12 flex flex-col items-center">
    <div class="w-full" style="max-width: 64rem">
      <h1 class="text-2xl font-semibold text-foreground text-center mb-10">
        Explore and discover packages
      </h1>
      <p v-if="store.loading" class="text-muted-foreground text-sm text-center">
        Loading...
      </p>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PackageCard v-for="pkg in sortedPackages" :key="pkg.name" :pkg="pkg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { usePackageStore } from "@/stores/package";
import PackageCard from "@/components/PackageCard.vue";

const store = usePackageStore();
onMounted(() => store.fetchPackages());

const sortedPackages = computed(() =>
  [...store.packages].sort((a, b) => b.download_count - a.download_count),
);
</script>
