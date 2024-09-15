<script setup>
import { ProgrammaticNavigation } from "./__code";

const currentTab = ref(0);

const items = ["Appetizers", "Entrees", "Deserts", "Cocktails"];

const tabItemText =
  "Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.";
const totalTabs = items.length;

const preTab = () => {
  if (currentTab.value !== 1) currentTab.value -= 1;
};

const nextTab = () => {
  if (currentTab.value !== totalTabs) currentTab.value += 1;
};
</script>

<template>
  <div id="programmatic-navigation">
    <GlobalsIntro title="Programmatic Navigation" />
    <GlobalsCodePre :code="ProgrammaticNavigation" background>
      <v-card>
        <v-tabs v-model="currentTab" grow>
          <v-tab v-for="item in items.length" :key="item" :value="item">
            {{ items[item - 1] }}
          </v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="currentTab">
            <v-window-item v-for="item in items.length" :key="item" :value="item">
              {{ tabItemText }}
            </v-window-item>
          </v-window>

          <div class="d-flex justify-center gap-4 mt-3">
            <v-btn
              :disabled="currentTab === 1"
              :variant="currentTab === 1 ? 'tonal' : undefined"
              @click="preTab"
              class="ma-2"
            >
              Previous
            </v-btn>

            <v-btn
              :disabled="currentTab === totalTabs"
              :variant="currentTab === totalTabs ? 'tonal' : undefined"
              @click="nextTab"
              class="ma-2"
            >
              Next
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
