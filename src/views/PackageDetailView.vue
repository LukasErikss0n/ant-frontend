<template>
    <div v-if="pkg" class="max-w-5xl mx-auto px-6 py-8">
        <!-- Breadcrumb + version badge -->
        <div class="flex items-center justify-between mb-4">
            <div class="text-sm text-base-content/50 flex items-center gap-1">
                <router-link to="/packages" class="text-primary hover:underline">Packages</router-link>
                <span>/</span>
                <span>{{ pkg.name }}</span>
                <span>/</span>
                <span>{{ activeVersion }}</span>
            </div>
            <span class="badge badge-neutral font-mono text-xs">v{{ activeVersion }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl font-bold mb-6">{{ pkg.name }}</h1>

        <div class="flex gap-6 items-start">
            <!-- Left column -->
            <div class="flex flex-col gap-4 flex-1 min-w-0">
                <!-- Description -->
                <div class="rounded-lg border border-base-content/10 bg-base-300 p-5">
                    <h2
                        class="text-sm font-semibold text-base-content/60 uppercase tracking-wider mb-2"
                    >
                        Description
                    </h2>
                    <p class="text-base-content/80 text-sm">
                        {{ pkg.description }}
                    </p>
                </div>

                <!-- README -->
                <div class="rounded-lg border border-base-content/10 bg-base-300 p-5">
                    <h2
                        class="text-sm font-semibold text-base-content/60 uppercase tracking-wider mb-4"
                    >
                        README
                    </h2>
                    <div
                        class="prose prose-sm max-w-none text-base-content/80 whitespace-pre-wrap"
                    >
                        {{ pkg.readme }}
                    </div>
                </div>
            </div>

            <!-- Right column -->
            <div class="flex flex-col gap-4 w-72 shrink-0">
                <!-- Details -->
                <div class="rounded-lg border border-base-content/10 bg-base-300 p-5">
                    <h2
                        class="text-xs font-semibold text-base-content/40 uppercase tracking-widest mb-4"
                    >
                        Details
                    </h2>
                    <div class="flex flex-col gap-3 text-sm">
                        <div class="flex justify-between items-center">
                            <span class="text-base-content/60">Owner</span>
                            <span class="text-primary">{{ pkg.author }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-base-content/60">Created</span>
                            <span class="text-base-content/80">{{
                                pkg.publishedAt
                            }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-base-content/60">Downloads</span>
                            <span class="text-base-content/80">{{
                                pkg.downloads
                            }}</span>
                        </div>
                    </div>
                </div>

                <!-- Download -->
                <div class="rounded-lg border border-base-content/10 bg-base-300 p-5">
                    <h2
                        class="text-xs font-semibold text-base-content/40 uppercase tracking-widest mb-4"
                    >
                        Download
                    </h2>
                    <div class="flex gap-2">
                        <code
                            class="flex-1 bg-base-content/5 rounded px-3 py-2 text-xs font-mono text-base-content/80 truncate"
                        >
                            cpm install {{ pkg.name }}
                        </code>
                        <button
                            class="btn btn-sm btn-neutral shrink-0 shadow-none"
                            @click="copy(`cpm install ${pkg.name}`)"
                        >
                            {{ copied ? "Copied!" : "Copy" }}
                        </button>
                    </div>
                </div>

                <!-- Versions -->
                <div class="rounded-lg border border-base-content/10 bg-base-300 p-5">
                    <h2
                        class="text-xs font-semibold text-base-content/40 uppercase tracking-widest mb-4"
                    >
                        Versions
                    </h2>
                    <div class="flex flex-col gap-2">
                        <router-link
                            v-for="v in pkg.versions"
                            :key="v.version"
                            :to="`/packages/${pkg.id}/${v.version}`"
                            class="flex justify-between items-center text-sm py-0.5 rounded hover:underline"
                            :class="v.version === activeVersion ? 'text-primary font-semibold' : 'text-base-content/50'"
                        >
                            <span>{{ v.version }}</span>
                            <span class="text-base-content/40 text-xs">{{ v.releasedAt }}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        v-else
        class="max-w-5xl mx-auto px-6 py-16 text-center text-base-content/50"
    >
        Package not found.
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { usePackageStore } from "../stores/packageStore";

const route = useRoute();
const store = usePackageStore();

const pkg = computed(() => store.getById(route.params.id as string));

const activeVersion = computed(() => {
    if (route.params.version) return route.params.version as string;
    return pkg.value?.versions[0].version ?? "";
});

const copied = ref(false);

function copy(text: string) {
    navigator.clipboard.writeText(text);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
}
</script>
