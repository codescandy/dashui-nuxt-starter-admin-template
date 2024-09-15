export const Basic = `<script setup>
  const overlay = ref(false)

  watch(
    () => overlay.value,
    (valold) => {
      setTimeout(() => {
        overlay.value = false
      }, 2000)
    }
  )
</script>

<template>
  <div class="text-center">
    <v-btn @click="overlay = !overlay"> Show Overlay </v-btn>

    <v-overlay v-model="overlay"></v-overlay>
  </div>
</template>`;

export const Close = `<template>
  <v-btn>
    Close

    <v-overlay activator="parent" location-strategy="connected" scroll-strategy="close">
      <v-card class="pa-4"> Hello! </v-card>
    </v-overlay>
  </v-btn>
</template>`;

export const Reposition = `<template>
  <v-btn>
  Reposition

    <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
      <v-card class="pa-4"> Hello! </v-card>
    </v-overlay>
  </v-btn>
</template>`;

export const None = `<template>
  <v-btn>
  None

    <v-overlay activator="parent" location-strategy="connected" scroll-strategy="none">
      <v-card class="pa-4"> Hello! </v-card>
    </v-overlay>
  </v-btn>
</template>`;

export const Contained = `<script setup>
  const overlay = ref(false)
</script>

<template>
  <v-row align="center" class="ma-4" justify="center">
    <v-card height="300" width="250" color="background">
      <v-row justify="center">
        <v-btn color="success" class="mt-12" @click="overlay = !overlay"> Show Overlay </v-btn>

        <v-overlay v-model="overlay" contained class="align-center justify-center">
          <v-btn color="success" @click="overlay = false"> Hide Overlay </v-btn>
        </v-overlay>
      </v-row>
    </v-card>
  </v-row>
</template>`;

export const Advanced = `<script setup>
  import avatar1 from '/images/components/overlays/1.jpg'
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card class="mx-auto" max-width="344" v-bind="props">
      <v-img :src="avatar1" />

      <v-card-text>
        <h2 class="text-h5 font-weight-bold text-primary">Magento Forests</h2>
        Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
      </v-card-text>

      <v-card-title>
        <v-rating :model-value="4" dense hover class="me-2"></v-rating>
        <span class="text-primary text-subtitle-2">64 Reviews</span>
      </v-card-title>

      <v-overlay
        :model-value="isHovering"
        contained
        scrim="#036358"
        class="align-center justify-center"
      >
        <v-btn variant="flat">See more info</v-btn>
      </v-overlay>
    </v-card>
  </v-hover>
</template>`;

export const Loader = `<script setup>
  const overlay = ref(false)

  watch(
    () => overlay.value,
    (valold) => {
      setTimeout(() => {
        overlay.value = false
      }, 3000)
    }
  )
</script>

<template>
  <v-btn append-icon="tabler-share" @click="overlay = !overlay"> Launch Application </v-btn>

  <v-overlay :model-value="overlay" class="align-center justify-center">
    <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>`;
