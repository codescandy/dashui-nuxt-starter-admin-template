<script setup>
import { Basic } from "./__code";

const menusVariant = ["primary", "secondary", "success", "info", "warning", "error"];

const items = [
  {
    title: "Option 1",
    value: "Option 1",
  },
  {
    title: "Option 2",
    value: "Option 2",
  },
  {
    title: "Option 3",
    value: "Option 3",
  },
];
</script>
<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      Remember to put the element that activates the menu in the activator slot.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-menu v-for="menu in menusVariant" :key="menu">
        <template #activator="{ props }">
          <v-btn :color="menu" v-bind="props">
            {{ menu }}
          </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>
    </GlobalsCodePre>
  </div>
</template>
