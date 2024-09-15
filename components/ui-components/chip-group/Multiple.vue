<script setup>
import { Multiple } from "./__code";
const tags = [
  "Work",
  "Home Improvement",
  "Vacation",
  "Food",
  "Drawers",
  "Shopping",
  "Art",
  "Tech",
  "Creative Writing",
];
</script>

<template>
  <div id="multiple">
    <GlobalsIntro title="Multiple">
      Chip groups with <code>multiple</code> prop can have many values selected.
    </GlobalsIntro>
    <GlobalsCodePre :code="Multiple">
      <v-chip-group multiple selected-class="text-primary">
        <v-chip v-for="tag in tags" :key="tag">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </GlobalsCodePre>
  </div>
</template>
