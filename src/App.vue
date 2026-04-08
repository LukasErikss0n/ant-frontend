<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <RouterView class="flex-1" />
        <AppFooter />
    </div>
</template>
