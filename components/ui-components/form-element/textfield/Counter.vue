<script setup>
import { Counter } from "./__code";
const rules = [(v) => v.length <= 25 || "Max 25 characters"];

const title = ref("Preliminary report");
const description = ref("California is a state in the western United States");
</script>

<template>
  <div id="counter">
    <GlobalsIntro title="Counter">
      Use a <code>counter</code> prop to inform a user of the character limit.
    </GlobalsIntro>
    <GlobalsCodePre :code="Counter">
      <global-text-field
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />

      <global-text-field
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </GlobalsCodePre>
  </div>
</template>
