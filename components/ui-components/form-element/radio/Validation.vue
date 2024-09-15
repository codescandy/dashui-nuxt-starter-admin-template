<script setup>
import { Validation } from "./__code";
const radioGroup = ref(1);
const rules = [(value) => (value !== 3 ? true : "Do not select the third one!")];
</script>

<template>
  <div id="validation">
    <GlobalsIntro title="Validation">
      Use <code>rules</code> prop to validate a radio. Accepts a mixed array of types
      <code>function</code>, <code>boolean</code> and <code>string</code>. Functions pass an input
      value as an argument and must return either <code>true</code> / <code>false</code> or a string
      containing an error message.
    </GlobalsIntro>
    <GlobalsCodePre :code="Validation">
      <v-radio-group v-model="radioGroup" inline :rules="rules">
        <v-radio
          v-for="n in 3"
          :key="n"
          :error="radioGroup === 3"
          :label="`Radio ${n}`"
          :value="n"
        />
      </v-radio-group>
    </GlobalsCodePre>
  </div>
</template>
