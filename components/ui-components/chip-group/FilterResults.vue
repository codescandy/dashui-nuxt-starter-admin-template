<script setup>
import { FilterResults } from "./__code";

const amenities = ref([1, 4]);
const neighborhoods = ref([1]);
</script>
<template>
  <div id="filter-results">
    <GlobalsIntro title="Filter results">
      Easily create chip groups that provide additional feedback with the
      <code>filter</code> prop. This creates an alternative visual style that communicates to the
      user that the chip is selected.
    </GlobalsIntro>
    <GlobalsCodePre :code="FilterResults">
      <v-card class="mx-auto" max-width="400">
        <v-toolbar flat color="primary" dark>
          <icon-btn>
            <v-icon icon="tabler-x" />
          </icon-btn>

          <v-toolbar-title>Filter results</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <h2 class="text-h6 mb-2">Choose amenities</h2>

          <v-chip-group v-model="amenities" column multiple>
            <v-chip filter variant="outlined"> Elevator </v-chip>
            <v-chip filter variant="outlined"> Washer / Dryer </v-chip>
            <v-chip filter variant="outlined"> Fireplace </v-chip>
            <v-chip filter variant="outlined"> Wheelchair access </v-chip>
            <v-chip filter variant="outlined"> Dogs ok </v-chip>
            <v-chip filter variant="outlined"> Cats ok </v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-text>
          <h2 class="text-h6 mb-2">Choose neighborhoods</h2>

          <v-chip-group v-model="neighborhoods" column multiple>
            <v-chip filter variant="outlined"> Snowy Rock Place </v-chip>
            <v-chip filter variant="outlined"> Honeylane Circle </v-chip>
            <v-chip filter variant="outlined"> Donna Drive </v-chip>
            <v-chip filter variant="outlined"> Elaine Street </v-chip>
            <v-chip filter variant="outlined"> Court Street </v-chip>
            <v-chip filter variant="outlined"> Kennedy Park </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
