<template>
    <div class="max-w-2xl mx-auto px-4 py-10">
        <h1 class="text-2xl font-semibold mb-6">Packages</h1>
        <div v-if="store.loading" class="text-base-content/50">Loading...</div>
        <div v-else class="flex flex-col gap-3">
            <PackageCard v-for="pkg in store.packages" :key="pkg.id" :pkg="pkg" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePackageStore } from "../stores/packageStore";
import PackageCard from "../components/PackageCard.vue";

const store = usePackageStore();

onMounted(() => store.fetchPackages());
</script>
