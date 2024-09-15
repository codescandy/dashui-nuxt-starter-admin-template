<script setup>
import { Density } from "./__code";
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      The <code>density</code> prop decreases the height of the alert based upon 1 of 3 levels of
      density. <code>default</code>, <code>comfortable</code>, and <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Density">
      <v-alert density="compact" color="primary" variant="tonal">
        I'm a compact alert with a <strong>color</strong> of primary.
      </v-alert>
      <v-alert density="comfortable" color="secondary" variant="tonal">
        I'm a comfortable alert with the <strong>variant</strong> prop and a
        <strong>color</strong> of secondary.
      </v-alert>
      <v-alert density="default" color="success" variant="tonal">
        I'm a default alert with the <strong>color</strong> of success.
      </v-alert>
    </GlobalsCodePre>
  </div>
</template>
