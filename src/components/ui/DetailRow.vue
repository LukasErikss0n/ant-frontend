<template>
    <div class="flex justify-between items-center text-sm">
        <span class="text-muted-foreground">{{ label }}</span>
        <span :class="valueClass"><slot /></span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    valueClass?: string
}>()
</script>
