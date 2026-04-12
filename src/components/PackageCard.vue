<template>
  <router-link :to="`/packages/${pkg.name}`" class="block">
    <Card
      class="hover:bg-muted/30 transition-colors cursor-pointer overflow-hidden w-full"
    >
      <!-- Card header row -->
      <div
        class="flex items-start justify-between gap-4 bg-muted/40 px-5 py-3 border-b border-border min-h-[80px]"
      >
        <!-- Logo + name + author -->
        <div class="flex items-center gap-4 min-w-0 overflow-hidden">
          <div
            class="w-14 h-14 rounded-md bg-muted flex items-center justify-center text-foreground font-bold text-lg shrink-0 border border-border"
          >
            {{ pkg.name.charAt(0).toUpperCase() }}
          </div>
          <div class="flex flex-col min-w-0">
            <span class="font-semibold text-foreground text-base truncate">{{
              pkg.name
            }}</span>
            <div
              class="flex items-center gap-2 text-sm text-muted-foreground mt-1"
            >
              <User class="w-3.5 h-3.5 shrink-0" />
              <span class="truncate">{{ pkg.repository_owner }}</span>
            </div>
          </div>
        </div>
        <!-- Meta: downloads + version, date -->
        <div
          class="flex flex-col items-end gap-1.5 shrink-0 text-xs text-muted-foreground"
        >
          <div class="flex items-center gap-1.5">
            <Badge variant="outline" class="gap-1 px-2 py-0 text-xs h-5">
              <download class="w-3 h-3" />{{ pkg.download_count }}
            </Badge>
            <Badge
              class="px-2 py-0 text-xs h-5 font-mono bg-primary/20 text-primary border-primary/30"
            >
              {{ pkg.latest_version.version }}
            </Badge>
          </div>
          <span>Updated {{ formatDate(pkg.latest_version.published_at) }}</span>
        </div>
      </div>
      <!-- Description -->
      <CardContent class="px-5 py-4">
        <p class="text-sm text-muted-foreground leading-relaxed">
          {{ pkg.latest_version.description }}
        </p>
      </CardContent>
    </Card>
  </router-link>
</template>

<script setup lang="ts">
import type { PackageCatalogItem } from "@/types/package";
import { User, Download } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

defineProps<{ pkg: PackageCatalogItem }>();

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("sv-SE", {
    timeZone: "Europe/Stockholm",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
</script>
