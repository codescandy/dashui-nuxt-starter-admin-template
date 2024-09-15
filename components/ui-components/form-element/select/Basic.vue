<script setup>
import { Basic } from "./__code";

const items = ["Foo", "Bar", "Fizz", "Buzz"];
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      Select fields components are used for collecting user provided information from a list of
      options.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <global-select :items="items" label="Standard" placeholder="Select Item" />
    </GlobalsCodePre>
  </div>
</template>
