<script setup>
import { Multiple } from "./__code";

const selectedOptions = ref(["Alabama"]);

const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
];
</script>

<template>
  <div id="multiple">
    <GlobalsIntro title="Multiple">
      Select fields components are used for collecting user provided information from a list of
      options.
    </GlobalsIntro>
    <GlobalsCodePre :code="Multiple">
      <global-select
        v-model="selectedOptions"
        :items="states"
        :menu-props="{ maxHeight: '400' }"
        label="Select"
        multiple
        persistent-hint
        placeholder="Select State"
      />
    </GlobalsCodePre>
  </div>
</template>
