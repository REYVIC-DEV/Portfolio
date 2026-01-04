<template>
  <NuxtLink v-if="type === 'link'" :to="to">
    <button
      class="relative px-4 py-2 overflow-hidden text-xl transition-all duration-300 border-2 cursor-pointer group"
      :class="buttonBase"
    >
      <!-- Sliding background (ALWAYS left → right) -->
      <span
        class="absolute inset-0 transition-transform duration-300 -translate-x-full group-hover:translate-x-0"
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
  <a v-else :href="`mailto:${to}`">
    <button
      class="relative px-4 py-2 overflow-hidden text-xl transition-all duration-300 border-2 cursor-pointer group"
      :class="buttonBase"
    >
      <!-- Sliding background (ALWAYS left → right) -->
      <span
        class="absolute inset-0 transition-transform duration-300 -translate-x-full group-hover:translate-x-0"
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
  </a>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    to: string
    variant?: 'default' | 'reverted'
    type?: 'link' | 'email'
  }>(),
  {
    variant: 'default',
    type: 'link',
  }
)

const isReverted = computed(() => props.variant === 'reverted')

const isEmail = computed(() => props.type === 'email')

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

const linkComponent = computed(() => (isEmail.value ? 'a' : 'NuxtLink'))

const linkProps = computed(() =>
  isEmail.value ? { href: `mailto:${props.to}` } : { to: props.to }
)
</script>
