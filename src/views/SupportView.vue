<template>
  <div class="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-16">
    <!-- Help / FAQ -->
    <section id="help">
      <h2 class="text-2xl font-bold text-foreground mb-6">Help &amp; FAQ</h2>
      <div class="flex flex-col gap-3 w-full">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="w-full rounded-xl ring-1 ring-foreground/10 bg-card text-card-foreground cursor-pointer select-none"
          @click="toggle(i)"
        >
          <div class="flex items-center justify-between gap-4 px-4 py-4">
            <span class="text-sm font-medium text-foreground">{{ item.question }}</span>
            <ChevronDown
              class="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': open === i }"
            />
          </div>
          <div v-if="open === i" class="px-4 pb-4">
            <p class="text-sm text-muted-foreground leading-relaxed">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <h2 class="text-2xl font-bold text-foreground mb-6">Contact Ant</h2>
      <Card>
        <CardHeader>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
              <Mail class="w-5 h-5" />
            </div>
            <CardTitle>Get in touch</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground leading-relaxed">
            We can be reached by mail at
            <a href="mailto:admin@ant.com" class="text-primary hover:underline font-mono">admin@ant.com</a>.
          </p>
        </CardContent>
      </Card>
    </section>

    <!-- Status -->
    <section id="status">
      <h2 class="text-2xl font-bold text-foreground mb-6">System Status</h2>
      <div class="flex flex-col gap-4">
        <Card v-for="service in services" :key="service.name">
          <CardHeader>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                  <component :is="service.icon" class="w-5 h-5" />
                </div>
                <CardTitle>{{ service.name }}</CardTitle>
              </div>
              <Badge class="bg-primary/20 text-primary border-primary/30">Live</Badge>
            </div>
          </CardHeader>
          <CardContent class="flex flex-col gap-1">
            <p class="text-sm text-muted-foreground">{{ service.description }}</p>
            <p class="text-xs text-muted-foreground/50">Last updated: {{ service.updatedAt }} · No known problems</p>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Mail, Server, Package, Zap, ChevronDown } from 'lucide-vue-next'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const route = useRoute()
const open = ref<number | null>(null)
function toggle(i: number) {
  open.value = open.value === i ? null : i
}

onMounted(() => {
  if (route.hash) {
    const el = document.querySelector(route.hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
})

const faqs = [
  {
    question: 'How do I install a package?',
    answer: 'Run `cpm install <package>` in your terminal. Make sure you have cpm installed globally first with `npm install -g cpm`.',
  },
  {
    question: 'How do I publish a package?',
    answer: 'Authenticate with `cpm login`, then run `cpm publish` from your package directory. Your package.json must include a valid name and version.',
  },
  {
    question: 'How do I update a package to a specific version?',
    answer: 'Use `cpm install <package>@<version>` to pin a specific version, or `cpm update <package>` to upgrade to the latest compatible release.',
  },
  {
    question: 'What happens if a package I depend on is removed?',
    answer: 'Published versions are immutable and cannot be deleted. If a package is deprecated, you will see a warning when installing it.',
  },
  {
    question: 'How do I report a security vulnerability?',
    answer: 'Email us at admin@ant.com with the subject "Security Report". We aim to respond within 48 hours and will coordinate a responsible disclosure.',
  },
]

const services = [
  {
    name: 'Package Registry',
    icon: Package,
    description: 'Package hosting, versioning, and distribution.',
    updatedAt: 'Apr 11, 2026',
  },
  {
    name: 'API',
    icon: Server,
    description: 'REST API powering all package installs and queries.',
    updatedAt: 'Apr 12, 2026',
  },

]
</script>
