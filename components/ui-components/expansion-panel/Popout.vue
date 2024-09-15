<script setup>
import { Popout } from "./__code";
</script>
<template>
  <div id="popout">
    <GlobalsIntro title="Popout">
      Expansion panels in their simplest form display a list of expandable items. However, with the
      <code>multiple</code> prop, the expansion-panel can remain open until explicitly closed.
    </GlobalsIntro>
    <GlobalsCodePre :code="Popout" background>
      <v-expansion-panels popout>
        <v-expansion-panel v-for="i in 4" :key="i">
          <v-expansion-panel-title> Popout {{ i }} </v-expansion-panel-title>
          <v-expansion-panel-text>
            Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes
            gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes
            bonbon candy.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </GlobalsCodePre>
  </div>
</template>
