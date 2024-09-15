<script setup>
import { Colors } from "./__code";

const selectedRadio = ref("primary");

const colorsRadio = ["Primary", "Secondary", "Success", "Info", "Warning", "Error"];
</script>

<template>
  <div id="colors">
    <GlobalsIntro title="Colors">
      Radios can be colored by using any of the built-in colors and contextual names using the
      <code>color</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Colors">
      <v-radio-group v-model="selectedRadio">
        <v-radio
          v-for="radio in colorsRadio"
          :key="radio"
          :label="radio"
          :color="radio.toLocaleLowerCase()"
          :value="radio.toLocaleLowerCase()"
        />
      </v-radio-group>
    </GlobalsCodePre>
  </div>
</template>
