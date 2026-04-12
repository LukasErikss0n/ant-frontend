<template>
  <div
    class="sticky top-0 flex items-center bg-card border-b border-border px-4 h-12 z-50"
  >
    <router-link
      to="/"
      class="text-sm font-bold tracking-tight shrink-0 text-foreground"
    >
      AntBase
    </router-link>

    <div class="flex flex-1 justify-center px-6">
      <div
        class="flex w-1/2 rounded-lg border border-border bg-input/30 overflow-hidden"
      >
        <div class="flex items-center pl-3 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
        </div>
        <Input
          placeholder="Search packages"
          class="border-none bg-transparent shadow-none focus-visible:ring-0 rounded-none"
        />
        <Button size="sm" class="rounded-none border-none rounded-r-lg h-full px-4"
          >Search</Button
        >
      </div>
    </div>

    <router-link
      to="/packages"
      class="ml-4 text-muted-foreground hover:text-foreground transition-colors"
      title="Packages"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
</script>
