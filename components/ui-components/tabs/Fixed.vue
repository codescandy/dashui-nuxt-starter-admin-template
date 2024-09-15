<script setup>
import { Fixed } from "./__code";

const currentTab = ref("Appetizers");

const items = ["Fixed Tab 1", "Fixed Tab 2", "Fixed Tab 3", "Fixed Tab 4"];

const tabItemText =
  "hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.";
</script>

<template>
  <div id="fixed">
    <GlobalsIntro title="Fixed">
      The <code>fixed-tabs</code> prop forces <code>v-tab</code> to take up all available space up
      to the maximum width (300px).
    </GlobalsIntro>
    <GlobalsCodePre :code="Fixed" background>
      <v-card>
        <v-tabs v-model="currentTab" fixed-tabs>
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="currentTab">
            <v-window-item v-for="item in items" :key="item" :value="item">
              {{ tabItemText }}
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
