<template>
    <Card>
        <CardHeader>
            <CardTitle class="text-xs uppercase tracking-widest text-muted-foreground">
                <slot name="title" />
            </CardTitle>
        </CardHeader>
        <CardContent>
            <slot />
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>
