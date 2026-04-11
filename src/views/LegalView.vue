<template>
  <div class="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-16">
    <!-- Terms of Use -->
    <section id="terms">
      <h2 class="text-2xl font-bold text-foreground mb-6">Terms of Use</h2>
      <div class="flex flex-col gap-3 w-full">
        <div
          v-for="(item, i) in terms"
          :key="i"
          class="w-full rounded-xl ring-1 ring-foreground/10 bg-card text-card-foreground cursor-pointer select-none"
          @click="toggleTerms(i)"
        >
          <div class="flex items-center justify-between gap-4 px-4 py-4">
            <span class="text-sm font-medium text-foreground">{{ item.title }}</span>
            <ChevronDown
              class="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openTerms === i }"
            />
          </div>
          <div v-if="openTerms === i" class="px-4 pb-4">
            <p class="text-sm text-muted-foreground leading-relaxed">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Code of Conduct -->
    <section id="coc">
      <h2 class="text-2xl font-bold text-foreground mb-6">Code of Conduct</h2>
      <div class="flex flex-col gap-3 w-full">
        <div
          v-for="(item, i) in coc"
          :key="i"
          class="w-full rounded-xl ring-1 ring-foreground/10 bg-card text-card-foreground cursor-pointer select-none"
          @click="toggleCoc(i)"
        >
          <div class="flex items-center justify-between gap-4 px-4 py-4">
            <span class="text-sm font-medium text-foreground">{{ item.title }}</span>
            <ChevronDown
              class="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openCoc === i }"
            />
          </div>
          <div v-if="openCoc === i" class="px-4 pb-4">
            <p class="text-sm text-muted-foreground leading-relaxed">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronDown } from 'lucide-vue-next'

const route = useRoute()
const openTerms = ref<number | null>(null)
const openCoc = ref<number | null>(null)

function toggleTerms(i: number) {
  openTerms.value = openTerms.value === i ? null : i
}
function toggleCoc(i: number) {
  openCoc.value = openCoc.value === i ? null : i
}

onMounted(() => {
  if (route.hash) {
    const el = document.querySelector(route.hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
})

const terms = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using the Ant package registry, you agree to be bound by these Terms of Use. If you do not agree, please do not use the service.',
  },
  {
    title: 'Use of the Registry',
    body: 'You may use Ant to browse, install, and publish packages for ColonyOS. You are responsible for ensuring that any packages you publish comply with applicable laws and do not infringe on third-party rights.',
  },
  {
    title: 'Package Ownership',
    body: 'You retain ownership of the packages you publish. By publishing a package, you grant Ant a non-exclusive licence to host and distribute it through the registry.',
  },
  {
    title: 'Prohibited Content',
    body: 'You may not publish packages that contain malware, spyware, or any code designed to harm users or systems. Violations will result in immediate removal and account suspension.',
  },
  {
    title: 'Service Availability',
    body: 'Ant is provided on an as-is basis. We do not guarantee uninterrupted availability and reserve the right to modify or discontinue any part of the service at any time.',
  },
]

const coc = [
  {
    title: 'Be respectful',
    body: 'Treat all community members with respect. Harassment, discrimination, or abusive language of any kind will not be tolerated in any Ant space, including issues, discussions, and package comments.',
  },
  {
    title: 'Publish responsibly',
    body: 'Only publish packages you have the right to distribute. Clearly document what your package does. Do not use misleading names or descriptions to impersonate other projects.',
  },
  {
    title: 'Report problems',
    body: 'If you discover a security vulnerability or policy violation, report it to admin@ant.com rather than disclosing it publicly. We will work with you on a responsible resolution.',
  },
  {
    title: 'Enforcement',
    body: 'Violations of this Code of Conduct may result in warnings, package removal, or permanent account suspension, depending on the severity and frequency of the violation.',
  },
]
</script>
