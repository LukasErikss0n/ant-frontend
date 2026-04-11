<template>
  <div>
    <!-- Hero -->
    <section
      class="relative h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div
        class="absolute inset-0 pointer-events-none"
        style="
          background: radial-gradient(
            ellipse 60% 50% at 50% 50%,
            color-mix(in oklch, var(--primary) 15%, transparent) 0%,
            transparent 70%
          );
        "
      ></div>

      <div
        class="relative flex flex-col items-center text-center gap-6 max-w-2xl"
      >
        <h1
          class="text-5xl sm:text-6xl font-bold text-foreground leading-tight"
        >
          Discover. Install. Deploy.
        </h1>
        <p class="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Ant is a modern package registry for developers — find trusted
          packages, manage dependencies, and publish your own tools to the
          community with ease.
        </p>

        <Card class="w-full max-w-xs">
          <CardContent class="flex items-center gap-2 px-4 py-2.5 h-1">
            <span class="text-primary font-mono text-sm select-none">$</span>
            <span
              class="flex-1 text-left font-mono text-sm text-muted-foreground"
              >cpm install &lt;package&gt;</span
            >
            <button
              @click="copyInstall"
              class="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors shrink-0"
            >
              {{ copied ? "Copied!" : "Copy" }}
            </button>
          </CardContent>
        </Card>

        <div class="flex gap-3">
          <Button size="lg" as-child>
            <router-link to="/packages">Packages</router-link>
          </Button>
          <Button size="lg" variant="outline" @click="scrollToFeatures">
            Learn more
          </Button>
        </div>
      </div>
    </section>

    <!-- Feature cards -->
    <section
      id="features"
      class="relative min-h-screen flex items-center justify-center py-24 px-6"
    >
      <div class="flex flex-col gap-4 w-full max-w-lg">
        <Card v-for="card in featureCards" :key="card.title">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div
                class="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground"
              >
                <component :is="card.icon" class="w-5 h-5" />
              </div>
              <CardTitle>{{ card.title }}</CardTitle>
            </div>
          </CardHeader>
          <CardContent class="flex flex-col gap-3">
            <div class="flex items-center gap-2 flex-wrap">
              <Badge
                variant="secondary"
                class="font-mono bg-primary/20 text-primary border-primary/30"
                >{{ card.from }}</Badge
              >
              <span class="text-muted-foreground/40 text-xs">→</span>
              <Badge variant="outline" class="font-mono">{{ card.to }}</Badge>
            </div>
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ card.description }}
            </p>
            <p class="text-xs text-muted-foreground/50">
              Use cases: {{ card.useCases }}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FileText, RefreshCw, MessageCircle } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function scrollToFeatures() {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
}

const copied = ref(false);
function copyInstall() {
  navigator.clipboard.writeText("cpm install <package>");
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}

const featureCards = [
  {
    title: "Package Registry",
    icon: FileText,
    from: "Publish",
    to: "Install",
    description:
      "Publish and distribute packages with ease. Ant automatically handles versioning, dependencies, and distribution at scale.",
    useCases: "Libraries, CLI tools, shared modules, internal packages",
  },
  {
    title: "Version Control",
    icon: RefreshCw,
    from: "Desired State",
    to: "Actual State",
    description:
      "Define package versions declaratively. Ant continuously reconciles your dependency tree and resolves conflicts automatically.",
    useCases: "Monorepos, dependency graphs, auto-upgrades, security patches",
  },
  {
    title: "Live Collaboration",
    icon: MessageCircle,
    from: "Client",
    to: "Team",
    description:
      "Real-time collaboration on package development. Stream updates, reviews, and notifications between team members instantly.",
    useCases:
      "Team workflows, code reviews, release coordination, notifications",
  },
];
</script>
