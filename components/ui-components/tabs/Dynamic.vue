<script setup>
import { Dynamic } from "./__code";

const totalTabs = ref(3);
const currentTab = ref(0);

watch(totalTabs, (newValue) => {
  currentTab.value = newValue - 1;
});
</script>

<template>
  <div id="dynamic">
    <GlobalsIntro title="Dynamic">
      Tabs can be dynamically added and removed. This allows you to update to any number and the
      <code>v-tabs</code> component will react.
    </GlobalsIntro>
    <GlobalsCodePre :code="Dynamic" background>
      <v-card>
        <v-tabs v-model="currentTab">
          <v-tab v-for="n in totalTabs" :key="n" :value="n"> Tab {{ n }} </v-tab>
        </v-tabs>

        <v-card-text>
          <v-btn
            :disabled="!totalTabs"
            class="me-4"
            :variant="!totalTabs ? 'tonal' : undefined"
            @click="totalTabs--"
          >
            Remove Tab
          </v-btn>

          <v-btn @click="totalTabs++"> Add Tab </v-btn>
        </v-card-text>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
