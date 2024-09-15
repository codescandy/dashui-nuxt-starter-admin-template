<script setup>
defineProps({
  pageIntro: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <v-row :class="pageIntro ? 'pb-8' : 'pb-4'">
    <v-col v-if="pageIntro">
      <h1 class="text-h2">{{ title }}</h1>
      <p class="text-body-1">
        {{ subtitle }}
      </p>
    </v-col>

    <v-col v-else>
      <h1 class="text-h3">{{ title }}</h1>
      <p class="text-body-1">
        <slot />
      </p>
    </v-col>
  </v-row>
</template>
