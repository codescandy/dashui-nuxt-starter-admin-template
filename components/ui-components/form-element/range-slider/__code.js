export const Basic = `<script setup>
  const sliderValues = ref([10, 60])
</script>

<template>
  <v-range-slider v-model="sliderValues" />
</template>`;

export const Disabled = `<script setup>
  const sliderValues = ref([30, 60])
</script>

<template>
  <v-range-slider v-model="sliderValues" disabled label="Disabled"/>
</template>`;

export const Color = `<script setup>
  const sliderValues = ref([10, 60])
</script>

<template>
  <v-range-slider v-model="sliderValues" color="success" track-color="warning" />
</template>`;

export const Step = `<script setup>
  const sliderValues = ref([20, 40])
</script>

<template>
  <v-range-slider v-model="sliderValues" step="10" />
</template>`;

export const ThumbLabel = `<script setup>
  const seasons = ['Winter', 'Spring', 'Summer', 'Fall']

  const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']

  const sliderValues = ref([1, 2])
</script>

<template>
  <v-range-slider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <v-icon :icon="icons[modelValue]" />
    </template>
  </v-range-slider>
</template>`;

export const Vertical = `<script setup>
  const sliderValues = ref([20, 40])
</script>

<template>
  <v-range-slider v-model="sliderValues" direction="vertical"/>
</template>`;
