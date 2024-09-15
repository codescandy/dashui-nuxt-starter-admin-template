<script setup>
import { Elevation } from "./__code";
</script>

<template>
  <div id="elevation">
    <GlobalsIntro title="Elevation">
      The <code>elevation</code> property provides up to 24 levels of shadow depth. By default,
      cards rest at 2dp.
    </GlobalsIntro>
    <GlobalsCodePre :code="Elevation">
      <v-card class="mx-auto my-8" max-width="344" elevation="16">
        <v-card-item>
          <v-card-title> Card title </v-card-title>
          <v-card-subtitle> Card subtitle secondary text </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
