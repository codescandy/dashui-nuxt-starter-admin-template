export const Location = `<template>
  <v-btn variant="tonal">
    Tooltip on End
    <v-tooltip activator="parent" location="end"> End Tooltip </v-tooltip>
  </v-btn>

  <v-btn variant="tonal">
    Tooltip on Start
    <v-tooltip activator="parent" location="start"> Start Tooltip </v-tooltip>
  </v-btn>

  <v-btn variant="tonal">
    Tooltip on Top
    <v-tooltip activator="parent" location="top"> Top Tooltip </v-tooltip>
  </v-btn>

  <v-btn variant="tonal">
    Tooltip on Bottom
    <v-tooltip activator="parent" location="bottom"> Bottom Tooltip </v-tooltip>
  </v-btn>
</template>`;

export const Events = `<template>
  <!-- open on hover -->
  <v-btn variant="outlined">
    <span>Open On Hover</span>
    <v-tooltip activator="parent" location="top"> Open On Hover </v-tooltip>
  </v-btn>

  <!-- open on click -->
  <v-btn variant="outlined" color="primary">
    <span>Open On click</span>

    <v-tooltip open-on-click :open-on-hover="false" location="top" activator="parent">
      Open On click
    </v-tooltip>
  </v-btn>

  <!-- open on focus -->
  <v-btn variant="outlined">
    <span>Open On Hover + Focus</span>
    <v-tooltip open-on-focus location="top" activator="parent">
      Open On Hover + Focus
    </v-tooltip>
  </v-btn>
</template>`;

export const DelayOnHover = `<template>
  <v-btn variant="outlined">
    <span>Open Delay On Hover</span>
    <v-tooltip open-delay="500" location="top" activator="parent">
      <span>Open Delay On Hover</span>
    </v-tooltip>
  </v-btn>
</template>`;

export const VModelSupport = `<script setup>

  const isTooltipVisible = ref(false)
</script>

<template>
  <v-btn @click="isTooltipVisible = !isTooltipVisible"> toggle tooltip </v-btn>

  <v-tooltip :model-value="isTooltipVisible" location="top">
    <template #activator="{ props }">
      <v-icon v-bind="props" icon="tabler-brand-instagram" />
    </template>
    <span>Programmatic tooltip</span>
  </v-tooltip>
</template>`;

export const Transition = `<template>
  <!-- Scale transition -->
  <v-btn>
    scale transition
    <v-tooltip location="top" transition="scale-transition" activator="parent">
      <span>Scale Transition</span>
    </v-tooltip>
  </v-btn>

  <!-- Scroll x transition -->
  <v-btn>
    scroll X transition
    <v-tooltip location="top" activator="parent" transition="scroll-x-transition">
      <span>Scroll X Transition</span>
    </v-tooltip>
  </v-btn>

  <!-- Scroll y transition -->
  <v-btn>
    scroll y transition
    <v-tooltip location="top" activator="parent" transition="scroll-y-transition">
      <span>Scroll Y Transition</span>
    </v-tooltip>
  </v-btn>
</template>`;

export const TooltipVariousElements = `<script setup>
  import avatar5 from '/images/avatar/avatar-5.jpg'
</script>

<template>
  <v-btn>
    Button
    <v-tooltip location="top" activator="parent"> Tooltip </v-tooltip>
  </v-btn>

  <v-avatar color="info">
    <v-img :src="avatar5" />
    <v-tooltip location="top" activator="parent"> Tooltip on Avatar </v-tooltip>
  </v-avatar>

  <v-tooltip location="top">
    <template #activator="{ props }">
      <v-icon v-bind="props" size="30" icon="tabler-user" />
    </template>
    <span>Tooltip on Icon</span>
  </v-tooltip>
</template>`;
