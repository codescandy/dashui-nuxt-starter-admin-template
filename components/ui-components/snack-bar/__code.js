export const Basic = `<script setup>
  const isSnackbarVisible = ref(false)
</script>

<template>
  <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

  <v-snackbar v-model="isSnackbarVisible"> Hello, I'm a snackbar </v-snackbar>
</template>`;

export const WithAction = `<script setup>
  const isSnackbarVisible = ref(false)
</script>

<template>
  <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

  <v-snackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.
    <template #actions>
      <v-btn color="error" @click="isSnackbarVisibility = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>`;

export const MultiLine = `<script setup>
  const isSnackbarVisible = ref(false)
</script>

<template>
  <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

  <!-- Snackbar -->
  <v-snackbar v-model="isSnackbarVisible" multi-line>
    I am a multi-line snackbar. I can have more than one line. This is another line that is
    quite long.

    <template #actions>
      <v-btn color="error" @click="isSnackbarVisible = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>`;

export const Timeout = `<script setup>
const isSnackbarVisible = ref(false)
</script>

<template>
  <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

  <v-snackbar v-model="isSnackbarVisible" :timeout="2000">
    My timeout is set to 2000.
  </v-snackbar>
</template>`;

export const Vertical = `<script setup>
  const isSnackbarVisible = ref(false)
</script>

<template>
  <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

  <v-snackbar v-model="isSnackbarVisible" vertical>
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet
    roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <v-btn color="success" @click="isSnackbarVisible = false"> Undo </v-btn>

      <v-btn color="error" @click="isSnackbarVisible = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>`;

export const Position = `<script setup>
  const isSnackbarTopStartVisible = ref(false)
  const isSnackbarTopVisible = ref(false)
  const isSnackbarTopEndVisible = ref(false)
  const isSnackbarBottomEndVisible = ref(false)
  const isSnackbarBottomVisible = ref(false)
  const isSnackbarBottomStartVisible = ref(false)
  const isSnackbarEndVisible = ref(false)
  const isSnackbarStartVisible = ref(false)
  const isSnackbarCenteredVisible = ref(false)
</script>

<template>
  <!-- top  -->
  <v-btn icon variant="text" @click="isSnackbarTopVisible = true">
    <v-icon icon="tabler-arrow-up" />
  </v-btn>

  <v-snackbar v-model="isSnackbarTopVisible" location="top"> I'm a top snackbar. </v-snackbar>

  <!-- top end -->
  <v-btn icon variant="text" @click="isSnackbarTopEndVisible = true">
    <v-icon icon="tabler-arrow-up-right" />
  </v-btn>

  <v-snackbar v-model="isSnackbarTopEndVisible" location="top end">
    I'm a top right snackbar.
  </v-snackbar>

  <!-- center end -->
  <v-btn icon variant="text" @click="isSnackbarEndVisible = true">
    <v-icon icon="tabler-arrow-right" />
  </v-btn>

  <v-snackbar v-model="isSnackbarEndVisible" location="end center">
    I'm a center end snackbar.
  </v-snackbar>

  <!-- bottom end -->
  <v-btn icon variant="text" @click="isSnackbarBottomEndVisible = true">
    <v-icon icon="tabler-arrow-down-right" />
  </v-btn>

  <v-snackbar v-model="isSnackbarBottomEndVisible" location="bottom end">
    I'm a bottom end snackbar.
  </v-snackbar>

  <!-- bottom -->
  <v-btn icon variant="text" @click="isSnackbarBottomVisible = true">
    <v-icon icon="tabler-arrow-down" />
  </v-btn>

  <v-snackbar v-model="isSnackbarBottomVisible"> I'm a bottom snackbar. </v-snackbar>

  <!-- bottom start -->
  <v-btn icon variant="text" @click="isSnackbarBottomStartVisible = true">
    <v-icon icon="tabler-arrow-down-left" />
  </v-btn>

  <v-snackbar v-model="isSnackbarBottomStartVisible" location="bottom start">
    I'm a bottom start snackbar.
  </v-snackbar>

  <!-- center start -->
  <v-btn icon variant="text" @click="isSnackbarStartVisible = true">
    <v-icon icon="tabler-arrow-left" />
  </v-btn>

  <v-snackbar v-model="isSnackbarStartVisible" location="start center">
    I'm a center start snackbar.
  </v-snackbar>

  <!-- top start -->
  <v-btn icon variant="text" @click="isSnackbarTopStartVisible = true">
    <v-icon icon="tabler-arrow-up-left" />
  </v-btn>

  <v-snackbar v-model="isSnackbarTopStartVisible" location="top start">
    I'm a top start snackbar.
  </v-snackbar>

  <!-- center -->
  <v-btn icon variant="text" @click="isSnackbarCenteredVisible = true">
    <v-icon icon="tabler-arrows-minimize" />
  </v-btn>

  <v-snackbar v-model="isSnackbarCenteredVisible" location="center">
    I'm a center snackbar.
  </v-snackbar>
</template>`;

export const Variants = `<script setup>
  const isDefaultSnackbarVisible = ref(false)
  const isTonalSnackbarVisible = ref(false)
  const isTextSnackbarVisible = ref(false)
  const isOutlinedSnackbarVisible = ref(false)
  const isFlatSnackbarVisible = ref(false)
</script>

<template>
  <!-- Default toggle btn -->
  <v-btn @click="isDefaultSnackbarVisible = true"> Default </v-btn>

  <!-- Default snackbar -->
  <v-snackbar v-model="isDefaultSnackbarVisible" location="top start">
    Jelly chocolate bar candy canes apple pie.
  </v-snackbar>

  <!-- tonal toggle btn -->
  <v-btn @click="isTonalSnackbarVisible = true"> tonal </v-btn>

  <!-- tonal snackbar -->
  <v-snackbar v-model="isTonalSnackbarVisible" location="top end" variant="tonal">
    Ice cream cake candy canes.
  </v-snackbar>

  <!-- Text toggle btn -->
  <v-btn @click="isTextSnackbarVisible = true"> Text </v-btn>

  <!-- Text snackbar -->
  <v-snackbar v-model="isTextSnackbarVisible" location="end center" variant="text">
    Pie icing biscuit soufflé liquorice topping.
  </v-snackbar>

  <!-- Outline toggle btn -->
  <v-btn @click="isOutlinedSnackbarVisible = true"> Outlined </v-btn>

  <!-- Outline snackbar -->
  <v-snackbar
    v-model="isOutlinedSnackbarVisible"
    location="bottom end"
    variant="outlined"
    color="error"
  >
    Oat cake caramels sesame snaps candy.
  </v-snackbar>

  <!-- flat toggle btn -->
  <v-btn @click="isFlatSnackbarVisible = true"> Flat </v-btn>

  <!-- flat snackbar -->
  <v-snackbar
    v-model="isFlatSnackbarVisible"
    location="bottom start"
    variant="flat"
    color="error"
  >
    Oat cake caramels sesame snaps candy.
  </v-snackbar>
</template>`;

export const Transition = `<script setup>
  const isSnackbarFadeVisible = ref(false)
  const isSnackbarScaleVisible = ref(false)
  const isSnackbarScrollReverseVisible = ref(false)
</script>

<template>
  <!-- fade -->
  <v-btn @click="isSnackbarFadeVisible = true"> fade snackbar </v-btn>

  <v-snackbar v-model="isSnackbarFadeVisible" transition="fade-transition" location="top start">
    I'm a fade transition snackbar.
  </v-snackbar>

  <!-- scale -->
  <v-btn @click="isSnackbarScaleVisible = true"> Scale snackbar </v-btn>

  <v-snackbar
    v-model="isSnackbarScaleVisible"
    transition="scale-transition"
    location="bottom end"
  >
    I'm a scale transition snackbar.
  </v-snackbar>

  <!-- scroll y reverse -->
  <v-btn @click="isSnackbarScrollReverseVisible = true"> scroll y reverse </v-btn>

  <v-snackbar
    v-model="isSnackbarScrollReverseVisible"
    transition="scroll-y-reverse-transition"
    location="top end"
  >
    I'm a scroll y reverse transition snackbar.
  </v-snackbar>
</template>`;
