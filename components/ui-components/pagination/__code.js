export const Basic = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination v-model="currentPage" :length="5" />
</template>`;

export const Outline = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    variant="outlined"
  />
</template>`;

export const Circle = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    rounded
  />
</template>`;

export const OutlineCircle = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    variant="outlined"
    rounded
  />
</template>`;

export const Disabled = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    disabled
  />
</template>`;

export const Icons = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-arrow-left"
    next-icon="tabler-arrow-right"
  />
</template>`;

export const Length = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    :length="50"
  />
</template>`;

export const TotalVisible = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    :length="50"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>`;

export const Color = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination
    v-model="currentPage"
    active-color="error"
    :length="7"
  />

  <v-pagination
    v-model="currentPage"
    active-color="success"
    :length="7"
  />
</template>`;

export const Size = `<script setup>
  const currentPage = ref(1)
</script>

<template>
  <v-pagination v-model="currentPage" :length="7" size="small" />
  <v-pagination v-model="currentPage" :length="7" />
  <v-pagination v-model="currentPage" :length="7" size="large" />
</template>`;
