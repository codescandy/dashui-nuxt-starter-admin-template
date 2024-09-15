<script setup>
import { Elevation } from "./__code";
const elevations = [0, 4, 8, 12, 16, 20];
</script>

<template>
  <div id="elevation">
    <GlobalsIntro title="Elevation">
      The <code>v-sheet</code> component accepts a custom <code>elevation</code> between 0 and 24 (0
      is default). The elevation property modifies the box-shadow property.
    </GlobalsIntro>
    <GlobalsCodePre :code="Elevation">
      <v-row justify="space-around">
        <v-col v-for="elevation in elevations" :key="elevation" cols="12" md="4">
          <v-sheet class="pa-12" color="background">
            <v-sheet :elevation="elevation" class="mx-auto" height="100" width="100"></v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
