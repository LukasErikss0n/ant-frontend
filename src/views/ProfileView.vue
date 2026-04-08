<template>
    <div class="max-w-4xl mx-auto px-6 py-12">
        <div class="flex gap-10 items-start">
            <!-- Left: avatar + identity -->
            <div class="flex flex-col items-center gap-3 shrink-0 w-40">
                <div class="avatar">
                    <div class="w-36 rounded-full ring ring-base-content/10">
                        <img :alt="user.username" :src="user.avatarUrl" />
                    </div>
                </div>
                <div class="text-center">
                    <h1 class="text-xl font-bold text-base-content">{{ user.username }}</h1>
                    <p class="text-base-content/50 text-sm mt-1">{{ user.bio }}</p>
                    <p class="text-base-content/40 text-xs mt-2">{{ user.location }} · {{ user.joinedAt }}</p>
                </div>
            </div>

            <!-- Right: packages section -->
            <div class="flex-1 min-w-0">
                <div class="flex items-baseline gap-2 mb-3">
                    <h2 class="text-lg font-semibold text-base-content">
                        Packages by {{ user.username }}
                    </h2>
                    <router-link to="/packages" class="text-primary text-sm hover:underline shrink-0">
                        Browse all packages →
                    </router-link>
                </div>

                <p class="text-base-content/60 text-sm mb-4">
                    Total Packages: <span class="font-semibold text-base-content">{{ user.packageCount }}</span>
                </p>

                <div
                    v-if="user.packageCount === 0"
                    class="rounded-lg border border-base-content/10 bg-base-300 px-5 py-4 text-base-content/50 text-sm"
                >
                    You haven't published any packages yet.
                </div>

                <div v-else class="flex flex-col gap-3">
                    <PackageCard v-for="pkg in userPackages" :key="pkg.id" :pkg="pkg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useUserStore } from "../stores/userStore";
import { usePackageStore } from "../stores/packageStore";
import PackageCard from "../components/PackageCard.vue";

const userStore = useUserStore();
const packageStore = usePackageStore();

const user = computed(() => userStore.user);

const userPackages = computed(() =>
    packageStore.packages.filter((p) => p.author === user.value.username)
);

onMounted(() => userStore.fetchUser());
</script>
