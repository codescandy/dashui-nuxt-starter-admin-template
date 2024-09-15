<script setup>
import { Chips } from "./__code";

const items = ["foo", "bar", "fizz", "buzz"];

const selected = ref(["foo", "bar", "fizz", "buzz"]);
</script>

<template>
  <div id="chips">
    <GlobalsIntro title="Chips">
      Use <code>chips</code> prop to make selected option as chip.
    </GlobalsIntro>
    <GlobalsCodePre :code="Chips">
      <global-select
        v-model="selected"
        :items="items"
        placeholder="Select Item"
        label="Chips"
        chips
        multiple
        closable-chips
      />
    </GlobalsCodePre>
  </div>
</template>
