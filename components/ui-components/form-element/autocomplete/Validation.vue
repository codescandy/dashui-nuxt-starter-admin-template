<script setup>
import { Validation } from "./__code";

const items = ["foo", "bar", "fizz", "buzz"];

const values = ref(["foo"]);
const nameRules = [(v) => !!v.length || "Select at least one option."];
</script>

<template>
  <div id="validation">
    <GlobalsIntro title="Validation">
      Use <code>rules</code> prop to validate autocomplete. Accepts a mixed array of types function,
      boolean and string. Functions pass an input value as an argument and must return either true /
      false or a string containing an error message.
    </GlobalsIntro>
    <GlobalsCodePre :code="Validation">
      <global-autocomplete
        v-model="values"
        :items="items"
        :rules="nameRules"
        placeholder="Select Option"
        multiple
      />
    </GlobalsCodePre>
  </div>
</template>
