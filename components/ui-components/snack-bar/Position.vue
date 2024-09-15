<script setup>
import { Position } from "./__code";

const isSnackbarTopStartVisible = ref(false);
const isSnackbarTopVisible = ref(false);
const isSnackbarTopEndVisible = ref(false);
const isSnackbarBottomEndVisible = ref(false);
const isSnackbarBottomVisible = ref(false);
const isSnackbarBottomStartVisible = ref(false);
const isSnackbarEndVisible = ref(false);
const isSnackbarStartVisible = ref(false);
const isSnackbarCenteredVisible = ref(false);
</script>

<template>
  <div id="position">
    <GlobalsIntro title="Position">
      Use <code>location</code> prop to change the position of snackbar.
    </GlobalsIntro>

    <GlobalsCodePre :code="Position">
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
    </GlobalsCodePre>
  </div>
</template>
