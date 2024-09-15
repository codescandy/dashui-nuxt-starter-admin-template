<script setup>
import { WeatehrCard } from "./__code";

const labels = {
  0: "SU",
  1: "MO",
  2: "TU",
  3: "WED",
  4: "TH",
  5: "FR",
  6: "SA",
};
const expand = ref(false);
const time = ref(0);
const forecast = [
  { day: "Tuesday", icon: "tabler-sun-low", temp: "24\xB0/12\xB0" },
  { day: "Wednesday", icon: "tabler-sun-high", temp: "22\xB0/14\xB0" },
  { day: "Thursday", icon: "tabler-cloud", temp: "25\xB0/15\xB0" },
];
</script>

<template>
  <div id="weather-card">
    <GlobalsIntro title="Weather card">
      Using <code>v-list-items</code> and a <code>v-slider</code>, we are able to create a unique
      weather card. The list components ensure that we have consistent spacing and functionality
      while the slider component allows us to provide a useful interface of selection to the user.
    </GlobalsIntro>
    <GlobalsCodePre :code="WeatehrCard">
      <v-card class="mx-auto" max-width="368" color="background">
        <v-card-item title="Florida">
          <template #subtitle>
            <v-icon icon="tabler-alert-triangle" size="18" color="error" class="me-1 pb-1" />

            Extreme Weather Alert
          </template>
        </v-card-item>

        <v-card-text class="py-0">
          <v-row align="center" no-gutters>
            <v-col class="text-h2" cols="6"> 64&deg;F </v-col>

            <v-col cols="6" class="text-right">
              <v-icon color="error" icon="tabler-storm" size="88"></v-icon>
            </v-col>
          </v-row>
        </v-card-text>

        <div class="d-flex py-3 justify-space-between">
          <v-list-item density="compact" prepend-icon="tabler-wind">
            <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
          </v-list-item>

          <v-list-item density="compact" prepend-icon="tabler-cloud-rain">
            <v-list-item-subtitle>48%</v-list-item-subtitle>
          </v-list-item>
        </div>

        <v-expand-transition>
          <div v-if="expand">
            <div class="py-2">
              <v-slider
                v-model="time"
                :max="6"
                :step="1"
                :ticks="labels"
                class="mx-4"
                color="primary"
                density="compact"
                hide-details
                show-ticks="always"
                thumb-size="10"
              ></v-slider>
            </div>

            <v-list class="bg-transparent">
              <v-list-item
                v-for="item in forecast"
                :key="item.day"
                :title="item.day"
                :append-icon="item.icon"
                :subtitle="item.temp"
              >
              </v-list-item>
            </v-list>
          </div>
        </v-expand-transition>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="expand = !expand">
            {{ !expand ? "Full Report" : "Hide Report" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
