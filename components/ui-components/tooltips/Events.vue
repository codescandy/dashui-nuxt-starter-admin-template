<script setup>
import { Events } from "./__code";
</script>
<template>
  <div id="events">
    <GlobalsIntro title="Events" />
    <GlobalsCodePre :code="Events">
      <!-- open on hover -->
      <v-btn variant="outlined">
        <span>Open On Hover</span>
        <v-tooltip activator="parent" location="top"> Open On Hover </v-tooltip>
      </v-btn>

      <!-- open on click -->
      <v-btn variant="outlined" color="primary">
        <span>Open On click</span>

        <v-tooltip open-on-click :open-on-hover="false" location="top" activator="parent">
          Open On click
        </v-tooltip>
      </v-btn>

      <!-- open on focus -->
      <v-btn variant="outlined">
        <span>Open On Hover + Focus</span>
        <v-tooltip open-on-focus location="top" activator="parent">
          Open On Hover + Focus
        </v-tooltip>
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
