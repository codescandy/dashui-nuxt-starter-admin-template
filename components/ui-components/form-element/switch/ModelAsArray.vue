<script setup>
import { ModelAsArray } from "./__code";

const people = ref(["John"]);
</script>

<template>
  <div id="model-as-array">
    <GlobalsIntro title="Model as array">
      Multiple <code>v-switch</code>'s can share the same <code>v-model</code> by using an array.
    </GlobalsIntro>
    <GlobalsCodePre :code="ModelAsArray" margin-l>
      <div class="d-flex">
        <v-switch v-model="people" label="John" value="John" class="pr-4" />

        <v-switch v-model="people" label="Jacob" value="Jacob" />
      </div>

      <p class="mt-2 mb-0">
        {{ people }}
      </p>
    </GlobalsCodePre>
  </div>
</template>
