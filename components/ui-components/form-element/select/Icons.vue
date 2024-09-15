<script setup>
import { Icons } from "./__code";

const selectedOption1 = ref("Florida");
const selectedOption2 = ref("Texas");

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
  <div id="icons">
    <GlobalsIntro title="Icons">
      Use a custom <code>prepend</code> or <code>appended</code> icon.
    </GlobalsIntro>
    <GlobalsCodePre :code="Icons" margin-l>
      <global-select
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
      <global-select
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </GlobalsCodePre>
  </div>
</template>
