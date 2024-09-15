<script setup>
import { WithBorder } from "./__code";
</script>
<template>
  <div id="with-border">
    <GlobalsIntro title="With Border">
      Please use the <code>.expansion-panels-width-border</code> class in conjunction with the
      <code>v-expansion-panels</code> component to create panels with borders.
    </GlobalsIntro>
    <GlobalsCodePre :code="WithBorder" background>
      <v-expansion-panels variant="accordion" class="expansion-panels-width-border">
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
