<template>
    <router-link :to="`/packages/${pkg.id}`">
        <Card class="hover:bg-muted/50 transition-colors cursor-pointer px-5 py-4">
            <CardContent class="p-0 flex items-start justify-between gap-4">
                <div class="flex flex-col gap-1 min-w-0">
                    <span class="font-semibold text-foreground text-sm">{{ pkg.name }}</span>
                    <span class="text-muted-foreground text-sm">{{ pkg.description }}</span>
                    <div class="flex items-center gap-3 mt-1 text-xs text-muted-foreground/60">
                        <span>{{ pkg.author }}</span>
                        <span>{{ pkg.downloads }} downloads</span>
                        <span>published {{ pkg.publishedAt }}</span>
                    </div>
                </div>
                <Badge variant="outline" class="shrink-0 font-mono">{{ pkg.version }}</Badge>
            </CardContent>
        </Card>
    </router-link>
</template>

<script setup lang="ts">
import type { Package } from '@/stores/packageStore'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

defineProps<{ pkg: Package }>()
</script>
