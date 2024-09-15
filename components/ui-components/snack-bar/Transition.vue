<script setup>
import { Transition } from "./__code";

const isSnackbarFadeVisible = ref(false);
const isSnackbarScaleVisible = ref(false);
const isSnackbarScrollReverseVisible = ref(false);
</script>

<template>
  <div id="transition">
    <GlobalsIntro title="Transition">
      The <code>v-snackbar</code> component is used to display a quick message to a user. Snackbars
      support positioning, removal delay, and callbacks.
    </GlobalsIntro>
    <GlobalsCodePre :code="Transition">
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
    </GlobalsCodePre>
  </div>
</template>
