<script setup>
import { PrefixesAndSuffixes } from "./__code";

const amount = ref(10.05);
const weight = ref(28.02);
const email = ref("example");
const time = ref("04:56");
</script>

<template>
  <div id="prefixes-and-suffixes">
    <GlobalsIntro title="Prefixes and suffixes">
      The <code>prefix</code> and <code>suffix</code> properties allows you to prepend and append
      inline non-modifiable text next to the text field.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="PrefixesAndSuffixes">
      <global-text-field
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
      <global-text-field
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
      <global-text-field
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
      <global-text-field
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </GlobalsCodePre>
  </div>
</template>
