export const Basic = `<script setup>
  const toggleSwitch = ref(true)
  const toggleFalseSwitch = ref(false)

  const capitalizedLabel = (label) => {
    const convertLabelText = label.toString()

    return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
  }
</script>

<template>
  <v-switch v-model="toggleSwitch" :label="capitalizedLabel(toggleSwitch)" />

  <v-switch v-model="toggleFalseSwitch" :label="capitalizedLabel(toggleFalseSwitch)" />
</template>`;

export const Inset = `<script setup>
  const insetSwitch1 = ref(true)
  const insetSwitch2 = ref(false)
</script>

<template>
  <v-switch
  v-model="insetSwitch1"
  :inset="false"
  :label="Switch 1: +insetSwitch1.toString()}"
  />
  <v-switch
  v-model="insetSwitch2"
  :inset="false"
  :label="Switch 2: +insetSwitch2.toString()"
  />
</template>`;

export const Colors = `<script setup>
  const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])

  const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
</script>

<template>
  <v-switch
    v-for="item in switches"
    :key="item"
    v-model="selectedSwitch"
    :label="item"
    :value="item"
    :color="item.toLowerCase()"
  />
</template>`;

export const ModelAsArray = `<script setup>
  const people = ref(['John'])
</script>

<template>
  <div class="d-flex">
    <v-switch v-model="people" label="John" value="John" class="pr-4" />

    <v-switch v-model="people" label="Jacob" value="Jacob" />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>`;

export const LabelSlot = `<script setup>
  const switchMe = ref(false)
</script>

<template>
  <v-switch v-model="switchMe">
    <template #label>
      Turn on the progress: <v-progress-circular :indeterminate="switchMe" class="ms-2" />
    </template>
  </v-switch>
</template>`;

export const TrueAndFalseValue = `<script setup>
  const switch1 = ref(1)
  const switch2 = ref('Show')
</script>

<template>
  <v-switch v-model="switch1" :label="switch1.toString()" :true-value="1" :false-value="0" />

  <v-switch
    v-model="switch2"
    :label="switch2.toString()"
    true-value="Show"
    false-value="Hide"
  />
</template>`;

export const States = `<script setup>
  const switchOn = ref('on')
  const switchOnDisabled = ref('on')
  const switchOnLoading = ref('on')
</script>

<template>
  <v-switch v-model="switchOn" value="on" label="On" />

  <v-switch label="Off" />

  <v-switch v-model="switchOnDisabled" value="on" disabled label="On disabled" />

  <v-switch disabled label="Off disabled" />

  <v-switch v-model="switchOnLoading" loading="warning" value="on" label="On loading" />

  <v-switch loading="warning" label="Off loading" />
</template>`;
