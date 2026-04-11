<template>
    <div v-if="pkg" class="max-w-5xl mx-auto px-6 py-8">
        <div class="flex items-center justify-between mb-4">
            <div class="text-sm text-muted-foreground flex items-center gap-1">
                <router-link to="/packages" class="text-primary hover:underline">Packages</router-link>
                <span>/</span><span>{{ pkg.name }}</span>
                <span>/</span><span>{{ activeVersion }}</span>
            </div>
            <Badge variant="outline" class="font-mono">v{{ activeVersion }}</Badge>
        </div>

        <h1 class="text-3xl font-bold text-foreground mb-6">{{ pkg.name }}</h1>

        <div class="flex gap-6 items-start">
            <!-- Left -->
            <div class="flex flex-col gap-4 flex-1 min-w-0">
                <Card>
                    <CardHeader><CardTitle class="text-xs uppercase tracking-widest text-muted-foreground">Description</CardTitle></CardHeader>
                    <CardContent><p class="text-sm text-foreground/80">{{ pkg.description }}</p></CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle class="text-xs uppercase tracking-widest text-muted-foreground">README</CardTitle></CardHeader>
                    <CardContent><div class="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">{{ pkg.readme }}</div></CardContent>
                </Card>
            </div>

            <!-- Right -->
            <div class="flex flex-col gap-4 w-72 shrink-0">
                <Card>
                    <CardHeader><CardTitle class="text-xs uppercase tracking-widest text-muted-foreground">Details</CardTitle></CardHeader>
                    <CardContent class="flex flex-col gap-3 text-sm">
                        <div class="flex justify-between"><span class="text-muted-foreground">Owner</span><span class="text-primary">{{ pkg.author }}</span></div>
                        <div class="flex justify-between"><span class="text-muted-foreground">Created</span><span class="text-foreground/80">{{ pkg.publishedAt }}</span></div>
                        <div class="flex justify-between"><span class="text-muted-foreground">Downloads</span><span class="text-foreground/80">{{ pkg.downloads }}</span></div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle class="text-xs uppercase tracking-widest text-muted-foreground">Download</CardTitle></CardHeader>
                    <CardContent class="flex gap-2">
                        <code class="flex-1 bg-muted rounded-md px-3 py-2 text-xs font-mono text-foreground/80 truncate">cpm install {{ pkg.name }}</code>
                        <Button size="sm" @click="copy(`cpm install ${pkg.name}`)">{{ copied ? 'Copied!' : 'Copy' }}</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle class="text-xs uppercase tracking-widest text-muted-foreground">Versions</CardTitle></CardHeader>
                    <CardContent class="flex flex-col gap-2">
                        <router-link
                            v-for="v in pkg.versions" :key="v.version"
                            :to="`/packages/${pkg.id}/${v.version}`"
                            class="flex justify-between items-center text-sm py-0.5 hover:underline"
                            :class="v.version === activeVersion ? 'text-primary font-semibold' : 'text-muted-foreground'"
                        >
                            <span>{{ v.version }}</span>
                            <span class="text-muted-foreground/50 text-xs">{{ v.releasedAt }}</span>
                        </router-link>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>

    <div v-else class="max-w-5xl mx-auto px-6 py-16 text-center text-muted-foreground">
        Package not found.
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePackageStore } from '@/stores/packageStore'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const route = useRoute()
const store = usePackageStore()
const pkg = computed(() => store.getById(route.params.id as string))
const activeVersion = computed(() => route.params.version as string || pkg.value?.versions[0].version || '')

const copied = ref(false)
function copy(text: string) {
    navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
}
</script>
