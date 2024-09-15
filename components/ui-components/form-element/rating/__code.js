export const Basic = `<template>
  <v-rating />
</template>`;

export const Density = `<template>
  <v-rating density="compact" />
</template>`;

export const Colors = `<script setup>
  const rating = ref(4)

  const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
</script>

<template>
  <div class="d-flex flex-column">
    <v-rating v-for="color in ratingColors" :key="color" v-model="rating" :color="color" />
  </div>
</template>`;

export const Size = `<script setup>
  const rating = ref(4)
</script>

<template>
  <div class="d-flex flex-column">
    <v-rating v-model="rating" size="x-small" />

    <v-rating v-model="rating" size="small" />

    <v-rating v-model="rating" />

    <v-rating v-model="rating" size="large" />

    <v-rating v-model="rating" size="x-large" />
  </div>
</template>`;

export const Length = `<script setup>
  const length = ref(5)
  const rating = ref(2)
</script>

<template>
  <div class="text-caption">Custom length</div>

  <v-slider v-model="length" :min="1" :max="7" />

  <v-rating v-model="rating" :length="length" />
  <p class="font-weight-medium mb-0">Model: {{ rating }}</p>
</template>`;

export const Clearable = `<template>
  <v-rating clearable />
</template>`;

export const Readonly = `<template>
  <v-rating readonly :model-value="4" />
</template>`;

export const Hover = `<template>
  <v-rating hover />
</template>`;

export const Incremented = `<script setup>
  const rating = ref(4.5)
</script>

<template>
  <v-rating v-model="rating" half-increments hover />
</template>`;

export const ItemSlot = `<script setup>
  const rating = ref(4.5)
</script>

<template>
  <v-rating v-model="rating">
    <template #item="props">
      <v-icon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </v-rating>
</template>`;
