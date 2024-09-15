<script setup>
import { Basic } from "./__code";
const radioGroup = ref(1);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-radio</code> component is a simple radio button.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-radio-group v-model="radioGroup">
        <v-radio v-for="n in 2" :key="n" :label="`Radio ${n}`" :value="n" />
      </v-radio-group>
    </GlobalsCodePre>
  </div>
</template>
