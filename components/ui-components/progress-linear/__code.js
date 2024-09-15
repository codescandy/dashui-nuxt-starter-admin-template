export const Color = `<template>
  <v-progress-linear model-value="15" bg-color="primary" color="primary" />
  <v-progress-linear model-value="30" bg-color="secondary" color="secondary" />
  <v-progress-linear model-value="45" bg-color="success" color="success" />
</template>`;

export const Buffering = `<script setup>
  const modelValue = ref(10)
  const bufferValue = ref(20)
  const interval = ref()

  const startBuffer = () => {
    clearInterval(interval.value)
    interval.value = setInterval(() => {
      modelValue.value += Math.random() * (15 - 5) + 5
      bufferValue.value += Math.random() * (15 - 5) + 6
    }, 2000)
  }

  onMounted(startBuffer)
  onBeforeUnmount(() => {
    clearInterval(interval.value)
  })
  watch(modelValue, () => {
    if (modelValue.value < 100) return false
    modelValue.value = 0
    bufferValue.value = 10
    startBuffer()
  })
</script>

<template>
  <v-progress-linear
    v-model="modelValue"
    color="primary"
    height="8"
    :buffer-value="bufferValue"
  />
</template>`;

export const Indeterminate = `<template>
  <v-progress-linear indeterminate color="primary" />
</template>`;

export const Reversed = `<template>
  <v-progress-linear color="primary" indeterminate reverse />
</template>`;

export const Rounded = `<template>
  <v-progress-linear model-value="78" height="8" color="primary" :rounded="false" />
  <v-progress-linear model-value="20" color="primary" height="20" :rounded="false" />
  <v-progress-linear model-value="33" height="20" color="primary" :rounded="false" />
</template>`;

export const Slots = `<script setup>
  const skill = ref(20)
  const knowledge = ref(33)
  const power = ref(78)
</script>

<template>
  <v-progress-linear v-model="power" color="primary" height="8" />
  <v-progress-linear v-model="skill" color="primary" height="20">
    <template #default="{ value }">
      <span>{{ Math.ceil(value) }}%</span>
    </template>
  </v-progress-linear>
  <v-progress-linear v-model="knowledge" height="20" color="primary">
    <span>{{ Math.ceil(knowledge) }}%</span>
  </v-progress-linear>
</template>`;

export const Striped = `<template>
  <v-progress-linear color="rgb(var(--v-theme-primary))" model-value="75" striped />
  <v-progress-linear color="rgb(var(--v-theme-success))" model-value="55" striped />
  <v-progress-linear color="rgb(var(--v-theme-warning))" model-value="35" striped />
</template>`;
