export const Basic = `<template>
  <v-breadcrumbs color="primary" :items="['Home']" />
  <v-breadcrumbs
    color="primary"
    density="compact"
    :items="['Home', 'Library']"
  />
  <v-breadcrumbs
    color="primary"
    density="compact"
    :items="['Home', 'Library', 'Data']"
  />
</template>`

export const Divider = `<template>
  <v-breadcrumbs
    divider="-"
    density="compact"
    :items="['Home', 'Library', 'Data']"
  />
</template>`

export const DividerSlot = `<template>
  <v-breadcrumbs
    density="compact"
    :items="['Home', 'Library', 'Data']"
  >
    <template #divider>
      <v-icon icon="tabler-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>
</template>`

export const Density = `<template>
  <v-breadcrumbs bg-color="primary" :items="['Home']" />
  <v-breadcrumbs
    bg-color="secondary"
    density="comfortable"
    :items="['Home', 'Library']"
  />
  <v-breadcrumbs
    bg-color="success"
    density="compact"
    :items="['Home', 'Library', 'Data']"
  />
</template>`
