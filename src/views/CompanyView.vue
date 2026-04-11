<template>
  <div class="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-16">
    <!-- About -->
    <section id="about">
      <h2 class="text-2xl font-bold text-foreground mb-6">About Ant</h2>
      <div class="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                <Bug class="w-5 h-5" />
              </div>
              <CardTitle>What is Ant?</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground leading-relaxed">
              Ant is the official package manager for ColonyOS — a modern operating system built for distributed, modular computing. Ant lets you discover, install, and publish packages that extend ColonyOS with new capabilities, drivers, tools, and services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                <Layers class="w-5 h-5" />
              </div>
              <CardTitle>Built for ColonyOS</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground leading-relaxed">
              ColonyOS is designed around the idea that every component of the system should be composable and replaceable. Ant powers that philosophy by providing a trusted registry where developers can share their work and users can build exactly the system they need.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                <Users class="w-5 h-5" />
              </div>
              <CardTitle>Open to the community</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground leading-relaxed">
              Ant is developed in the open. Anyone can publish packages, contribute to the registry, or help shape the direction of the project. We believe great software is built together.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Bug, Layers, Users } from 'lucide-vue-next'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
</script>
