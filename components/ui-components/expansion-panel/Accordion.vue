<script setup>
import { Accordion } from "./__code";
</script>
<template>
  <div id="accordion">
    <GlobalsIntro title="Accordion">
      Use <code>accordion</code> variant option to create Accordion Panels. Accordion
      expansion-panel hasn't got margins around active panel.
    </GlobalsIntro>
    <GlobalsCodePre :code="Accordion" background>
      <v-expansion-panels multiple>
        <v-expansion-panel v-for="i in 4" :key="i">
          <v-expansion-panel-title> Accordion {{ i }} </v-expansion-panel-title>
          <v-expansion-panel-text>
            Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake
            gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing
            danish pie.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </GlobalsCodePre>
  </div>
</template>
