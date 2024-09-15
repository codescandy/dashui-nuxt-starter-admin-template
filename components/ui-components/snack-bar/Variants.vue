<script setup>
import { Variants } from "./__code";

const isDefaultSnackbarVisible = ref(false);
const isTonalSnackbarVisible = ref(false);
const isTextSnackbarVisible = ref(false);
const isOutlinedSnackbarVisible = ref(false);
const isFlatSnackbarVisible = ref(false);
</script>

<template>
  <div id="variants">
    <GlobalsIntro title="Variants">
      Apply different styles to the snackbar using props such as <code>shaped</code>,
      <code>rounded</code>, <code>color</code>, <code>text</code>, <code>outlined</code>,
      <code>tile</code> and more.
    </GlobalsIntro>
    <GlobalsCodePre :code="Variants">
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
    </GlobalsCodePre>
  </div>
</template>
