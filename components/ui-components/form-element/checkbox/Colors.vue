<script setup>
import { Colors } from "./__code";

const colorCheckbox = ref(["Primary", "Secondary", "Success", "Info", "Warning", "Error"]);

const selectedCheckbox = ref([]);
</script>

<template>
  <div id="colors">
    <GlobalsIntro title="Colors">
      Checkboxes can be colored by using any of the builtin colors and contextual names using the
      <code>color</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Colors" flex>
      <v-checkbox
        v-for="color in colorCheckbox"
        :key="color"
        v-model="selectedCheckbox"
        :label="color"
        :color="color.toLowerCase()"
        :value="color"
      />
    </GlobalsCodePre>
  </div>
</template>
