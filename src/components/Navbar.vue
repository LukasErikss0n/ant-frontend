<template>
  <div
    class="sticky top-0 flex items-center bg-card border-b border-border px-4 h-12 z-50"
  >
    <router-link
      to="/"
      class="text-sm font-bold tracking-tight shrink-0 text-foreground"
    >
      Ant
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
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
</script>
