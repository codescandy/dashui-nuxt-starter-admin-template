<script setup>
import { Hover } from "./__code";
</script>

<template>
  <div id="hover">
    <GlobalsIntro title="Hover">
      When using the <code>hover</code> prop, the cards will increase its elevation when the mouse
      is hovered over them.
    </GlobalsIntro>
    <GlobalsCodePre :code="Hover">
      <v-card class="mx-auto my-8" max-width="344" hover>
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
