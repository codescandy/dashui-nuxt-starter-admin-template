<script setup>
import { Basic } from "./__code";

const items = [
  "Cras justo odio",
  "Dapibus ac facilisis in",
  "Morbi leo risus",
  "Porta ac consectetur ac",
];
</script>
<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      <code>v-list</code> component can contain an avatar, content, actions and much more.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic" background>
      <v-card class="mx-auto" max-width="374">
        <v-list :items="items" />
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
