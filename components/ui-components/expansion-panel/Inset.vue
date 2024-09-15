<script setup>
import { Inset } from "./__code";
</script>
<template>
  <div id="inset">
    <GlobalsIntro title="Inset">
      Use <code>inset</code> variant option to create Inset Panels. The Inset expansion-panel
      becomes smaller when activated.
    </GlobalsIntro>
    <GlobalsCodePre :code="Inset" background>
      <v-expansion-panels inset>
        <v-expansion-panel v-for="i in 4" :key="i">
          <v-expansion-panel-title> Inset {{ i }} </v-expansion-panel-title>
          <v-expansion-panel-text>
            Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate
            cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu
            I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut
            chocolate cake oat cake I love gummi bears.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </GlobalsCodePre>
  </div>
</template>
