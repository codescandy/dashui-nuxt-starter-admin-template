<script setup>
import { Mandatory } from "./__code";
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
  <div id="mandatory">
    <GlobalsIntro title="Mandatory">
      Chip groups with <code>mandatory</code> prop must always have a value selected.
    </GlobalsIntro>
    <GlobalsCodePre :code="Mandatory">
      <v-chip-group mandatory selected-class="text-primary">
        <v-chip v-for="tag in tags" :key="tag">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </GlobalsCodePre>
  </div>
</template>
