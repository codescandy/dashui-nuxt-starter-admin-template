<script setup>
import { Basic } from "./__code";
</script>
<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      Expansion panels in their simplest form display a list of expandable items. However, with the
      <code>multiple</code> prop, the expansion-panel can remain open until explicitly closed.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic" background>
      <v-expansion-panels multiple>
        <v-expansion-panel v-for="i in 4" :key="i">
          <v-expansion-panel-title> Item {{ i }} </v-expansion-panel-title>
          <v-expansion-panel-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </GlobalsCodePre>
  </div>
</template>
