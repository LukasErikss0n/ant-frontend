<template>
    <router-link
        :to="`/packages/${pkg.id}`"
        class="block rounded-lg border border-base-content/10 bg-base-300 px-5 py-4 hover:bg-base-200 transition-colors"
    >
        <div class="flex items-start justify-between gap-4">
            <div class="flex flex-col gap-1 min-w-0">
                <span class="font-semibold text-base-content text-sm">{{ pkg.name }}</span>
                <span class="text-base-content/60 text-sm">{{ pkg.description }}</span>
                <div class="flex items-center gap-3 mt-1 text-xs text-base-content/40">
                    <span>{{ pkg.author }}</span>
                    <span>{{ pkg.downloads }} downloads</span>
                    <span>published {{ pkg.publishedAt }}</span>
                </div>
            </div>
            <span class="badge badge-neutral shrink-0 font-mono text-xs">{{ pkg.version }}</span>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import type { Package } from "../stores/packageStore";

defineProps<{ pkg: Package }>();
</script>
