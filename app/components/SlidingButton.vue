<template>
  <NuxtLink :to="to">
    <button
      class="group relative cursor-pointer overflow-hidden border-2 px-4 py-2 text-xl transition-all duration-300"
      :class="buttonBase"
    >
      <!-- Sliding background (ALWAYS left → right) -->
      <span
        class="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
        :class="slideBg"
      ></span>

      <!-- Button text -->
      <span
        class="relative z-10 transition-colors duration-300"
        :class="textColor"
      >
        {{ text }}
      </span>
    </button>
  </NuxtLink>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    to: string
    variant?: 'default' | 'reverted'
  }>(),
  {
    variant: 'default',
  }
)

const isReverted = computed(() => props.variant === 'reverted')

const buttonBase = computed(() =>
  isReverted.value
    ? 'bg-text-primary text-bg-primary border-text-primary'
    : 'bg-transparent text-text-primary border-border hover:border-text-primary'
)

const slideBg = computed(() =>
  isReverted.value
    ? 'bg-bg-primary'
    : 'bg-text-primary'
)

const textColor = computed(() =>
  isReverted.value
    ? 'group-hover:text-text-primary'
    : 'group-hover:text-bg-primary'
)
</script>
