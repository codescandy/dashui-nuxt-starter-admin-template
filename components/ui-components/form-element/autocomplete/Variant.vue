<script setup>
import { Variant } from "./__code";

const items = ["California", "Colorado", "Florida", "Georgia", "Texas", "Wyoming"];
</script>

<template>
  <div id="variant">
    <GlobalsIntro title="Variant">
      Use <code>solo</code>, <code>outlined</code>, <code>underlined</code>, <code>filled</code> and
      <code>plain</code> options of <code>variant</code> prop to change the look of Autocomplete.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Variant">
      <global-autocomplete variant="solo" label="solo" :items="items" placeholder="Select State" />
      <global-autocomplete
        variant="outlined"
        label="outlined"
        placeholder="Select State"
        :items="items"
      />

      <global-autocomplete
        variant="underlined"
        label="underlined"
        placeholder="Select State"
        :items="items"
      />

      <global-autocomplete
        variant="filled"
        label="filled"
        placeholder="Select State"
        :items="items"
      />

      <global-autocomplete
        variant="plain"
        label="plain"
        placeholder="Select State"
        :items="items"
      />
    </GlobalsCodePre>
  </div>
</template>
