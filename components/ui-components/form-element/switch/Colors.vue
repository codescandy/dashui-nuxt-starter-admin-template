<script setup>
import { Colors } from "./__code";

const selectedSwitch = ref(["Primary", "Secondary", "Success", "Info", "Warning", "Error"]);

const switches = ref(["Primary", "Secondary", "Success", "Info", "Warning", "Error"]);
</script>

<template>
  <div id="colors">
    <GlobalsIntro title="Colors">
      Switches can be colored by using any of the builtin colors and contextual names using the
      <code>color</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Colors" flex margin-l>
      <v-switch
        v-for="item in switches"
        :key="item"
        v-model="selectedSwitch"
        :label="item"
        :value="item"
        :color="item.toLowerCase()"
      />
    </GlobalsCodePre>
  </div>
</template>
