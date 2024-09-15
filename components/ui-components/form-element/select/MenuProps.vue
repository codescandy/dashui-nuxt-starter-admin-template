<script setup>
import { MenuProps } from "./__code";

const items = ["Foo", "Bar", "Fizz", "Buzz"];
</script>

<template>
  <div id="menu-props">
    <GlobalsIntro title="Menu Props">
      Custom props can be passed directly to <code>v-menu</code> using <code>menuProps</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="MenuProps">
      <global-select
        :items="items"
        :menu-props="{ transition: 'scroll-y-transition' }"
        label="Label"
        placeholder="Select Item"
      />
    </GlobalsCodePre>
  </div>
</template>
