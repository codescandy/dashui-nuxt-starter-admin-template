<script setup>
import { Location } from "./__code";

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
  <div id="location">
    <GlobalsIntro title="Location">
      Menu can be offset relative to the activator by using the <code>location</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Location">
      <v-menu location="top">
        <template #activator="{ props }">
          <v-btn v-bind="props"> Top </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>

      <v-menu location="bottom">
        <template #activator="{ props }">
          <v-btn v-bind="props"> Bottom </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>

      <v-menu location="start">
        <template #activator="{ props }">
          <v-btn v-bind="props"> Start </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>

      <v-menu location="end">
        <template #activator="{ props }">
          <v-btn v-bind="props"> End </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>
    </GlobalsCodePre>
  </div>
</template>
