<script setup>
import { Density } from "./__code";

const items = ["Foo", "Bar", "Fizz", "Buzz"];
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      You can use <code>density</code> prop to reduce the field height and lower max height of list
      items.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
      <global-select :items="items" label="Density" density="compact" placeholder="Select Item" />
    </GlobalsCodePre>
  </div>
</template>
