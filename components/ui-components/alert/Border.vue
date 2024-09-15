<script setup>
import { Border } from "./__code";
</script>
<template>
  <div id="border">
    <GlobalsIntro title="Border">
      The <code>border</code> prop adds a simple border to one of the 4 sides of the alert. This can
      be combined with props like <code>color</code>, <code>type</code> and <code>icon</code> to
      provide unique accents to the alert. <code>icon</code> altogether.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Border">
      <v-alert color="primary" border="top" variant="tonal">
        I'm an alert with top border.
      </v-alert>
      <v-alert color="secondary" border="end" variant="tonal">
        I'm an alert with right border.
      </v-alert>
      <v-alert color="success" border="bottom" variant="tonal">
        I'm an alert with bottom border.
      </v-alert>
      <v-alert color="error" border="start" variant="tonal">
        I'm an alert with left border.
      </v-alert>
    </GlobalsCodePre>
  </div>
</template>
