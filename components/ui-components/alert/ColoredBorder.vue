<script setup>
import { ColorBorder } from "./__code";
</script>

<template>
  <div id="colored-border">
    <GlobalsIntro title="Colored Border">
      The <code>colored-border</code> prop removes the alert background in order to accent the
      <code>border</code> prop. If a type is set, it will use the type's default color. If no
      <code>color</code> or <code>type</code> is set, the color will default to the inverted color
      of the applied theme (black for light and white/gray for dark).
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="ColorBorder">
      <v-alert border-color="primary" border="top">
        I'm an alert with top primary color border.
      </v-alert>
      <v-alert border-color="secondary" border="end">
        I'm an alert with right secondary color border.
      </v-alert>
      <v-alert border-color="success" border="bottom">
        I'm an alert with bottom success color border.
      </v-alert>
      <v-alert border-color="error" border="start">
        I'm an alert with left error color border.
      </v-alert>
    </GlobalsCodePre>
  </div>
</template>
