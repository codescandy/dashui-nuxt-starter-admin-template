<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      You can optionally change the color of the
      <code>v-system-bar </code> by using the <code>color</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-layout style="height: 50px">
        <v-system-bar color="primary">
          <v-icon icon="tabler-wifi"></v-icon>
          <v-icon icon="tabler-building-broadcast-tower" class="ms-2"></v-icon>
          <v-icon icon="tabler-battery-2-filled" class="ms-2"></v-icon>

          <span class="ms-2">3:13PM</span>
        </v-system-bar>
      </v-layout>
      <v-layout style="height: 50px">
        <v-system-bar color="info">
          <v-icon icon="tabler-wifi"></v-icon>
          <v-icon icon="tabler-building-broadcast-tower" class="ms-2"></v-icon>
          <v-icon icon="tabler-battery-2-filled" class="ms-2"></v-icon>

          <span class="ms-2">3:13PM</span>
        </v-system-bar>
      </v-layout>
      <v-layout style="height: 50px">
        <v-system-bar color="success">
          <v-icon icon="tabler-wifi"></v-icon>
          <v-icon icon="tabler-building-broadcast-tower" class="ms-2"></v-icon>
          <v-icon icon="tabler-battery-2-filled" class="ms-2"></v-icon>

          <span class="ms-2">3:13PM</span>
        </v-system-bar>
      </v-layout>
    </GlobalsCodePre>
  </div>
</template>
