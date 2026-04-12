<template>
  

  <div v-if="pkg" class="max-w-5xl mx-auto px-6 py-8">
    <div class="flex items-center justify-between mb-4">
      <div class="text-sm text-muted-foreground flex items-center gap-1">
        <router-link to="/packages" class="text-primary hover:underline"
          >Packages</router-link
        >
        <span>/</span><span>{{ pkg.name }}</span> <span>/</span
        ><span>{{ pkg.selected_version.version }}</span>
      </div>
      <Badge variant="outline" class="font-mono"
        >v{{ pkg.selected_version.version }}</Badge
      >
    </div>

    <h1 class="text-3xl font-bold text-foreground mb-6">{{ pkg.name }}</h1>

    <div class="flex gap-6 items-start">
      <!-- Left -->
      <div class="flex flex-col gap-4 flex-1 min-w-0">
        <SectionCard>
          <template #title>Description</template>
          <p class="text-sm text-foreground/80 min-w-[19rem]">
            {{ pkg.selected_version.description }}
          </p>
        </SectionCard>
      </div>

      <!-- Right -->
      <div class="flex flex-col gap-4 w-72 shrink-0">
        <SectionCard>
          <template #title>Details</template>
          <div class="flex flex-col gap-3">
            <DetailRow label="Owner" value-class="text-primary">{{
              pkg.repository_owner
            }}</DetailRow>
            <DetailRow label="Published" value-class="text-foreground/80">{{
              formatDate(pkg.selected_version.published_at)
            }}</DetailRow>
            <DetailRow label="Downloads" value-class="text-foreground/80">{{
              pkg.download_count
            }}</DetailRow>
          </div>
        </SectionCard>

        <PackageActions
          :name="pkg.name"
          :version="pkg.selected_version.version"
          :templates="pkg.selected_version.templates"
        />

        <SectionCard>
          <template #title>Download</template>
          <div class="flex gap-2">
            <code
              class="flex-1 bg-muted rounded-md px-3 py-2 text-xs font-mono text-foreground/80 truncate"
            >
              cpm install {{ pkg.name }}
            </code>
            <Button size="sm" @click="copy(`cpm install ${pkg.name}`)">
              {{ copied ? "Copied!" : "Copy" }}
            </Button>
          </div>
        </SectionCard>

        <SectionCard>
          <template #title>Versions</template>
          <div class="flex flex-col gap-2">
            <router-link
              v-for="v in pkg.versions"
              :key="v.version"
              :to="`/packages/${pkg.name}/${v.version}`"
              class="flex justify-between items-center text-sm py-0.5 hover:underline"
              :class="
                v.version === pkg.selected_version.version
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground'
              "
            >
              <span>{{ v.version }}</span>
              <span class="text-muted-foreground/50 text-xs">{{
                formatVersionDate(v.published_at)
              }}</span>
            </router-link>
          </div>
        </SectionCard>
      </div>
    </div>
  </div>

  <div
    v-else
    class="max-w-5xl mx-auto px-6 py-16 text-center text-muted-foreground"
  >
    Package not found.
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { usePackageStore } from "@/stores/package";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionCard from "@/components/ui/SectionCard.vue";
import DetailRow from "@/components/ui/DetailRow.vue";
import PackageActions from "@/components/PackageActions.vue";

const route = useRoute();
const store = usePackageStore();

function fetchCurrent() {
  store.fetchPackageDetail(
    route.params.id as string,
    route.params.version as string | undefined,
  );
}

onMounted(fetchCurrent);
watch(() => [route.params.id, route.params.version], fetchCurrent);

const pkg = computed(() => store.currentPackage);

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("sv-SE", {
    timeZone: "Europe/Stockholm",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function formatVersionDate(iso: string): string {
  return new Date(iso).toLocaleDateString("sv-SE", {
    timeZone: "Europe/Stockholm",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

const copied = ref(false);
function copy(text: string) {
  navigator.clipboard.writeText(text);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>
