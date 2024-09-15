<script setup>
import { Grow } from "./__code";

const currentTab = ref("Appetizers");

const items = ["Appetizers", "Entrees", "Deserts", "Cocktails"];

const tabItemText =
  "hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.";
</script>

<template>
  <div id="grow">
    <GlobalsIntro title="Grow">
      The <code>grow</code> prop will make the tab items take up all available space with no limit.
    </GlobalsIntro>
    <GlobalsCodePre :code="Grow" background>
      <v-card>
        <v-tabs v-model="currentTab" grow>
          <v-tab v-for="item in items" :key="item">
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
