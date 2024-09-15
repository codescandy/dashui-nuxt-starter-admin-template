<script setup>
import { CustomTextAndValue } from "./__code";

const selectedOption = ref({
  state: "Florida",
  abbr: "FL",
});

const items = [
  {
    state: "Florida",
    abbr: "FL",
  },
  {
    state: "Georgia",
    abbr: "GA",
  },
  {
    state: "Nebraska",
    abbr: "NE",
  },
  {
    state: "California",
    abbr: "CA",
  },
  {
    state: "New York",
    abbr: "NY",
  },
];
</script>

<template>
  <div id="custom-text-and-value">
    <GlobalsIntro title="Custom text and value">
      You can specify the specific properties within your items array that correspond to the title
      and value fields. In this example we also use the return-object prop which will return the
      entire object of the selected item on selection.
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomTextAndValue">
      <global-select
        v-model="selectedOption"
        :hint="`${selectedOption.state}, ${selectedOption.abbr}`"
        :items="items"
        item-title="state"
        item-value="abbr"
        label="Select"
        persistent-hint
        return-object
        single-line
        placeholder="Select State"
      />
    </GlobalsCodePre>
  </div>
</template>
