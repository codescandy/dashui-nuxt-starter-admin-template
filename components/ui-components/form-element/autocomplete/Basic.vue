<script setup>
import { Basic } from "./__code";

const items = ["California", "Colorado", "Florida", "Georgia", "Texas", "Wyoming"];
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-autocomplete </code> component offers simple and flexible type-ahead
      functionality. This is useful when searching large sets of data or even dynamically fetching
      information from an API.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <global-autocomplete label="States" :items="items" placeholder="Select State" />
    </GlobalsCodePre>
  </div>
</template>
