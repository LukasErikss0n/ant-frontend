<template>
  <SectionCard>
    <template #title>Actions</template>
    <div class="flex flex-col gap-2">
      <Button class="w-full justify-start gap-2" variant="outline" @click="handleInstall">
        <Download class="w-4 h-4" /> Install
      </Button>
      <Button class="w-full justify-start gap-2" variant="outline" @click="templatesListOpen = true">
        <LayoutGrid class="w-4 h-4" /> Templates
      </Button>
      <Button class="w-full justify-start gap-2" variant="outline" @click="openValues">
        <List class="w-4 h-4" /> Default Values
      </Button>
    </div>
  </SectionCard>

  <!-- Default Values modal -->
  <FileViewerModal
    :open="valuesModal.open"
    title="Default Values"
    :content="valuesModal.content"
    :loading="valuesModal.loading"
    @close="valuesModal.open = false"
  />

  <!-- Template viewer modal -->
  <FileViewerModal
    :open="templateModal.open"
    :title="templateModal.title"
    :content="templateModal.content"
    :loading="templateModal.loading"
    @close="templateModal.open = false"
  />

  <!-- Templates list modal -->
  <Teleport to="body">
    <div
      v-if="templatesListOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click.self="templatesListOpen = false"
    >
      <div class="absolute inset-0 bg-black/60" />
      <div class="relative z-10 bg-background border border-border rounded-lg shadow-xl w-full max-w-sm mx-4">
        <div class="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 class="text-base font-semibold text-foreground">Templates</h2>
          <button class="text-muted-foreground hover:text-foreground" @click="templatesListOpen = false">
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="flex flex-col p-2">
          <button
            v-for="t in templates"
            :key="t.file"
            class="text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted/50 rounded-md flex items-center gap-2"
            @click="openTemplate(t.file)"
          >
            <FileCode class="w-4 h-4 text-muted-foreground shrink-0" />
            {{ t.file }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { Download, LayoutGrid, List, X, FileCode } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/ui/SectionCard.vue";
import FileViewerModal from "@/components/FileViewerModal.vue";
import packageService from "@/services/package";
import type { PackageTemplate } from "@/types/package";

const props = defineProps<{
  name: string;
  version: string;
  templates: PackageTemplate[];
}>();

async function handleInstall() {
  const { download_url } = await packageService.getDownloadUrl(props.name, props.version);
  window.location.href = download_url;
}

const valuesModal = reactive({ open: false, loading: false, content: "" });

async function openValues() {
  valuesModal.open = true;
  valuesModal.loading = true;
  valuesModal.content = await packageService.getValues(props.name, props.version);
  valuesModal.loading = false;
}

const templatesListOpen = ref(false);
watch(templatesListOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});

const templateModal = reactive({ open: false, loading: false, content: "", title: "" });

async function openTemplate(file: string) {
  templatesListOpen.value = false;
  templateModal.title = file;
  templateModal.open = true;
  templateModal.loading = true;
  templateModal.content = await packageService.getTemplate(props.name, props.version, file);
  templateModal.loading = false;
}
</script>
