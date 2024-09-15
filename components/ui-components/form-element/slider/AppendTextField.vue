<script setup>
import { AppendTextField } from "./__code";

const redColorValue = ref(161);
const greenColorValue = ref(105);
const blueColorValue = ref(225);
</script>

<template>
  <div id="append-text-field">
    <GlobalsIntro title="Append text field">
      Sliders can be combined with other components in its <code>append</code> slot, such as
      <code>v-text-field</code>, to add additional functionality to the component.
    </GlobalsIntro>
    <GlobalsCodePre :code="AppendTextField">
      <v-responsive
        :style="{ background: `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})` }"
        height="150px"
      />

      <v-row class="mt-5">
        <v-col cols="12">
          <!-- R -->
          <div class="d-flex justify-space-between">
            <v-slider v-model="redColorValue" :max="255" :step="1" prepend-icon="tabler-letter-r" />

            <v-text-field
              v-model="redColorValue"
              type="number"
              placeholder="10"
              :max="255"
              style="max-inline-size: 5rem"
            />
          </div>
        </v-col>

        <v-col cols="12">
          <!-- G -->
          <div class="d-flex justify-space-between">
            <v-slider
              v-model="greenColorValue"
              :max="255"
              :step="1"
              prepend-icon="tabler-letter-g"
            />

            <v-text-field
              v-model="greenColorValue"
              type="number"
              placeholder="20"
              :max="255"
              style="max-inline-size: 5rem"
            />
          </div>
        </v-col>

        <v-col cols="12">
          <!-- B -->
          <div class="d-flex justify-space-between">
            <v-slider
              v-model="blueColorValue"
              :max="255"
              :step="1"
              prepend-icon="tabler-letter-b"
            />
            <v-text-field
              v-model="blueColorValue"
              type="number"
              placeholder="30"
              :max="255"
              style="max-inline-size: 5rem"
            />
          </div>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
