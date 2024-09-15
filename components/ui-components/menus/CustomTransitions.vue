<script setup>
import { CustomTransitions } from "./__code";

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
  <div id="custom-transitions">
    <GlobalsIntro title="Custom transitions">
      Vuetify comes with 3 standard transitions, <code>scale</code>, <code>slide-x</code> and
      <code>slide-y</code>. Use <code>transition</code> prop to add transition to a menu.
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomTransitions">
      <v-menu transition="scale-transition">
        <template #activator="{ props }">
          <v-btn v-bind="props"> Scale Transition </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>

      <v-menu transition="slide-x-transition">
        <template #activator="{ props }">
          <v-btn v-bind="props"> Slide X Transition </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>

      <v-menu transition="slide-y-transition">
        <template #activator="{ props }">
          <v-btn v-bind="props"> Slide Y Transition </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>
    </GlobalsCodePre>
  </div>
</template>
