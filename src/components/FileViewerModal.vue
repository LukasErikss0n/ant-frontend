<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div class="absolute inset-0 bg-black/60" @click="$emit('close')" />
      <div
        class="relative z-10 bg-[#1e1e2e] border border-border rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] flex flex-col mx-4"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <h2 class="text-base font-semibold text-foreground">{{ title }}</h2>
          <div class="flex items-center gap-2">
            <Button size="sm" variant="outline" @click="copyContent">
              {{ copied ? "Copied!" : "Copy" }}
            </Button>
            <button
              class="text-muted-foreground hover:text-foreground transition-colors"
              @click="$emit('close')"
            >
              <X class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="overflow-auto flex-1">
          <div v-if="loading" class="p-6 text-center text-muted-foreground text-sm">
            Loading...
          </div>
          <table v-else class="w-full text-xs font-mono border-collapse">
            <tbody>
              <tr
                v-for="(line, i) in highlightedLines"
                :key="i"
                class="hover:bg-white/5"
              >
                <td class="select-none text-right text-white/20 px-4 py-0.5 w-10 border-r border-white/10">
                  {{ i + 1 }}
                </td>
                <td class="px-4 py-0.5 whitespace-pre" v-html="line" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("yaml", yaml);

const props = defineProps<{
  open: boolean;
  title: string;
  content: string;
  loading?: boolean;
}>();

defineEmits<{ close: [] }>();

watch(() => props.open, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});

const highlightedLines = computed(() => {
  if (!props.content) return [];
  const highlighted = hljs.highlight(props.content, { language: "yaml" }).value;
  return highlighted.split("\n");
});

const copied = ref(false);
function copyContent() {
  navigator.clipboard.writeText(props.content);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>
