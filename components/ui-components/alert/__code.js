export const Simple = `<template>
  <v-alert color="primary">
    I'm an alert with primary background color.
  </v-alert>

  <v-alert color="secondary">
    I'm an alert with secondary background color.
  </v-alert>

  <v-alert color="success">
    I'm an alert with success background color.
  </v-alert>

  <v-alert color="error">
    I'm an alert with error background color.
  </v-alert>

  <v-alert color="warning">
    I'm an alert with warning background color.
  </v-alert>

  <v-alert color="info">
    I'm an alert with info background color.
  </v-alert>
</template>`;

export const Icons = `<template>
  <v-alert color="primary" icon="tabler-brand-vue">
    I'm an alert with icon.
  </v-alert>
  <v-alert color="primary" variant="tonal" icon="tabler-brand-vue">
    I'm an alert with icon.
  </v-alert>
  <v-alert color="primary" variant="outlined" icon="tabler-brand-vue">
    I'm an alert with icon.
  </v-alert>
</template>`;

export const Border = `<template>
  <v-alert color="primary" border="top" variant="tonal">
    I'm an alert with top border.
  </v-alert>
  <v-alert color="secondary" border="end" variant="tonal">
    I'm an alert with right border.
  </v-alert>
  <v-alert color="success" border="bottom" variant="tonal">
    I'm an alert with bottom border.
  </v-alert>
  <v-alert color="error" border="start" variant="tonal">
    I'm an alert with left border.
  </v-alert>
</template>`;

export const ColorBorder = `<template>
  <v-alert border-color="primary" border="top">
    I'm an alert with top primary color border.
  </v-alert>
  <v-alert border-color="secondary" border="end">
    I'm an alert with right secondary color border.
  </v-alert>
  <v-alert border-color="success" border="bottom">
    I'm an alert with bottom success color border.
  </v-alert>
  <v-alert border-color="error" border="start">
    I'm an alert with left error color border.
  </v-alert>
</template>`;

export const Density = `<template>
  <v-alert density="compact" color="primary" variant="tonal">
    I'm a compact alert with a <strong>color</strong> of primary.
  </v-alert>

  <v-alert density="comfortable" color="secondary" variant="tonal">
    I'm a comfortable alert with the <strong>variant</strong> prop and
    a <strong>color</strong> of secondary.
  </v-alert>

  <v-alert density="default" color="success" variant="tonal">
    I'm a default alert with the <strong>color</strong> of success.
  </v-alert>
</template>`;

export const Type = `<template>
  <v-alert type="info">
    I'm a alert with a <strong>type</strong> of info
  </v-alert>
  <v-alert type="success">
    I'm a alert with a <strong>type</strong> of success
  </v-alert>
  <v-alert type="warning">
    I'm a alert with a <strong>type</strong> of warning
  </v-alert>
  <v-alert type="error">
    I'm a alert with a <strong>type</strong> of error
  </v-alert>
</template>`;

export const Closable = `<script setup>
  const isAlertVisible = ref(true)
</script>

<template>
  <v-alert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    Nice, you triggered this alert message!
  </v-alert>
  <v-btn v-if="!isAlertVisible" @click="isAlertVisible = true">
    Reset
  </v-btn>
</template>`;

export const ModalSupport = `<script setup>
  const isAlertVisibleModal = ref(true)
</script>

<template>
  <v-alert
    v-model="isAlertVisibleModal"
    color="primary"
    variant="tonal"
  >
    Nice, you triggered this alert message!
  </v-alert>

  <v-btn @click="isAlertVisibleModal = !isAlertVisibleModal">
    {{ isAlertVisibleModal ? 'Hide Alert' : 'Show Alert' }}
  </v-btn>
</template>`;

export const Outline = `<template>
  <v-alert variant="outlined" color="primary">
    I'm an alert with primary outline.
  </v-alert>
  <v-alert variant="outlined" color="secondary">
    I'm an alert with secondary outline.
  </v-alert>
  <v-alert variant="outlined" color="success">
    I'm an alert with success outline.
  </v-alert>
  <v-alert variant="outlined" color="error">
    I'm an alert with error outline.
  </v-alert>
  <v-alert variant="outlined" color="warning">
    I'm an alert with warning outline.
  </v-alert>
  <v-alert variant="outlined" color="info">
    I'm an alert with info outline.
  </v-alert>
</template>`;

export const Tonal = `<template>
  <v-alert variant="tonal" color="primary">
    I'm an alert with primary tonal.
  </v-alert>
  <v-alert variant="tonal" color="secondary">
    I'm an alert with secondary tonal.
  </v-alert>
  <v-alert variant="tonal" color="success">
    I'm an alert with success tonal.
  </v-alert>
  <v-alert variant="tonal" color="error">
    I'm an alert with error tonal.
  </v-alert>
  <v-alert variant="tonal" color="warning">
    I'm an alert with warning tonal.
  </v-alert>
  <v-alert variant="tonal" color="info">
    I'm an alert with info tonal.
  </v-alert>
</template>`;

export const Elevation = `<script setup>
  const alertShadow = ref(10)
</script>

<template>
  <v-slider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    class="pt-4"
    thumb-label
  />

  <v-alert color="primary" :elevation="alertShadow">
    I'm an alert with {{ alertShadow }} elevation.
  </v-alert>
</template>`;

export const Prominent = `<template>
  <v-alert icon="tabler-garden-cart" prominent color="primary">
    I'm an alert with prominent prop
  </v-alert>
  <v-alert icon="tabler-garden-cart" type="primary">
    I'm an alert with without prominent prop
  </v-alert>
</template>`;
