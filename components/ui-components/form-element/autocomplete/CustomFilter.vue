<script setup>
import { CustomFilter } from "./__code";

const states = [
  {
    name: "Florida",
    abbr: "FL",
    id: 1,
  },
  {
    name: "Georgia",
    abbr: "GA",
    id: 2,
  },
  {
    name: "Nebraska",
    abbr: "NE",
    id: 3,
  },
  {
    name: "California",
    abbr: "CA",
    id: 4,
  },
  {
    name: "New York",
    abbr: "NY",
    id: 5,
  },
];

function customFilter(item, queryText, itemText) {
  const textOne = itemText.title.toLowerCase();
  const textTwo = itemText.value.toLowerCase();
  const searchText = queryText.toLocaleLowerCase();

  return textOne.includes(searchText) || textTwo.includes(searchText);
}
</script>

<template>
  <div id="custom-filter">
    <GlobalsIntro title="Custom-filter">
      The <code>custom-filter</code> prop can be used to filter each individual item with custom
      logic.In example we will filter state based on their name and abbreviations
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomFilter">
      <global-autocomplete
        label="States"
        :items="states"
        :custom-filter="customFilter"
        item-title="name"
        item-value="abbr"
        placeholder="Select State"
      />
    </GlobalsCodePre>
  </div>
</template>
