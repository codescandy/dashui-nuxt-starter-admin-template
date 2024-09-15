<script setup>
import { Variant } from "./__code";

const items = ["Foo", "Bar", "Fizz", "Buzz"];
</script>

<template>
  <div id="variant">
    <GlobalsIntro title="Variant">
      Use <code>filled</code>, <code>outlined</code>, <code>solo</code>, <code>underlined</code> and
      <code>plain</code> options of variant prop to change appearance of select.
    </GlobalsIntro>
    <GlobalsCodePre :code="Variant" margin-l>
      <global-select :items="items" label="Outlined" placeholder="Select Item" />
      <global-select :items="items" label="Filled" placeholder="Select Item" variant="filled" />
      <global-select :items="items" label="Solo" placeholder="Select Item" variant="solo" />
      <global-select
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
      <global-select :items="items" label="Plain" placeholder="Select Item" variant="plain" />
    </GlobalsCodePre>
  </div>
</template>
