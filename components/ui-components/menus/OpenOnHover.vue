<script setup>
import { OpenOnHover } from "./__code";

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
  <div id="open-on-hover">
    <GlobalsIntro title="Open on hover">
      Menus can be accessed using hover instead of clicking with the
      <code>open-on-hover</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="OpenOnHover">
      <v-menu open-on-hover>
        <template #activator="{ props }">
          <v-btn v-bind="props"> On hover </v-btn>
        </template>

        <v-list :items="items" />
      </v-menu>
    </GlobalsCodePre>
  </div>
</template>
