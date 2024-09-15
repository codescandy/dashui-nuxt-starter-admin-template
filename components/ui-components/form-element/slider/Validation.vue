<script setup>
import { Validation } from "./__code";

const value = ref(30);
const rules = [(v) => v <= 40 || "Only 40 in stock"];
</script>

<template>
  <div id="validation">
    <GlobalsIntro title="Validation">
      Vuetify includes simple validation through the <code>rules</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Validation">
      <v-slider
        v-model="value"
        :error="value > 40"
        :rules="rules"
        :step="10"
        thumb-label="always"
        show-ticks
      />
    </GlobalsCodePre>
  </div>
</template>
