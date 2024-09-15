export const Color = `<template>
  <v-progress-circular model-value="50" color="primary" />
  <v-progress-circular model-value="50" color="secondary" />
  <v-progress-circular model-value="50" color="success" />
  <v-progress-circular model-value="50" color="info" />
  <v-progress-circular model-value="50" color="warning" />
  <v-progress-circular model-value="50" color="error" />
</template>`;

export const Indeterminate = `<template>
  <v-progress-circular indeterminate color="primary" />
  <v-progress-circular indeterminate color="secondary" />
  <v-progress-circular indeterminate color="success" />
  <v-progress-circular indeterminate color="info" />
  <v-progress-circular indeterminate color="warning" />
  <v-progress-circular indeterminate color="error" />
</template>`;

export const Rotate = `<script setup>
  const interval = ref()
  const progressValue = ref(0)

  onMounted(() => {
    interval.value = setInterval(() => {
      if (progressValue.value === 100) return (progressValue.value = 0)
      progressValue.value += 10
    }, 1000)
  })

  onBeforeUnmount(() => {
    clearInterval(interval.value)
  })
</script>

<template>
  <v-progress-circular
    :rotate="360"
    :size="70"
    :width="6"
    :model-value="progressValue"
    color="primary"
  >
    {{ progressValue }}
  </v-progress-circular>

  <v-progress-circular
    :rotate="90"
    :size="70"
    :width="6"
    :model-value="progressValue"
    color="primary"
  >
    {{ progressValue }}
  </v-progress-circular>

  <v-progress-circular
    :rotate="170"
    :size="70"
    :width="6"
    :model-value="progressValue"
    color="primary"
  >
    {{ progressValue }}
  </v-progress-circular>

  <v-progress-circular
    :rotate="-90"
    :size="70"
    :width="6"
    :model-value="progressValue"
    color="primary"
  >
    {{ progressValue }}
  </v-progress-circular>
</template>`;

export const Size = `<template>
  <v-progress-circular
    :size="30"
    width="3"
    indeterminate
    color="primary"
  />
  <v-progress-circular :size="40" indeterminate color="secondary" />
  <v-progress-circular :size="50" indeterminate color="success" />
  <v-progress-circular :size="60" indeterminate color="info" />
</template>`;
