<script setup>
import { Elevation } from "./__code";

const alertShadow = ref(5);
</script>

<template>
  <div id="elevation">
    <GlobalsIntro title="Elevation">
      Use <code>elevation</code> prop to set a box-shadow to alert.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Elevation">
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
    </GlobalsCodePre>
  </div>
</template>
