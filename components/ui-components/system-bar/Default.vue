<script setup>
import { Default } from "./__code";
</script>

<template>
  <div id="default">
    <GlobalsIntro title="Default">
      <code>v-system-bar</code> in its simplest form displays a small container with default theme.
    </GlobalsIntro>
    <GlobalsCodePre :code="Default">
      <v-layout style="height: 50px">
        <v-system-bar>
          <v-icon icon="tabler-wifi"></v-icon>
          <v-icon icon="tabler-building-broadcast-tower" class="ms-2"></v-icon>
          <v-icon icon="tabler-battery-2-filled" class="ms-2"></v-icon>

          <span class="ms-2">3:13PM</span>
        </v-system-bar>
      </v-layout>
    </GlobalsCodePre>
  </div>
</template>
