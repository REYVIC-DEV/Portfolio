<template>
  <section class="w-full max-w-360 mx-auto py-16 px-5 text-text-primary">
    <!-- Section title -->
    <h1 class="mb-16 text-center text-[28px] lg:text-[40px] font-bold">
      Projects
    </h1>

    <!-- Project items -->
    <div v-for="project in projects" :key="project.id" class="mb-20 flex flex-col gap-10 lg:flex-row lg:items-center">
      <!-- Left: Text -->
      <div class="flex-1">
        <h2 class="mb-4 text-xl font-semibold">{{ project.title }}</h2>

        <p class="mb-6 max-w-prose text-text-secondary leading-relaxed">
          {{ project.description }}
        </p>

        <!-- Buttons -->
        <div class="mb-8 flex items-center gap-6">
          <SlidingButton
            text="See Live"
            :to="project.url"
            variant="reverted"
          />
        </div>
      </div>

      <!-- Right: Image -->
      <div class="flex-1">
        <img
          :src="`/assets/img/projects/project_${project.id}.png`"
          :alt="`${project.title} preview`"
          class="w-full rounded-md object-cover shadow-md"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  url: string
}

const projects = await $fetch<Project[]>('/api/projects')
</script>
