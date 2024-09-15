<script setup>
import { ModelAsArray } from "./__code";

const selected = ref(["John"]);
</script>

<template>
  <div id="model-as-array">
    <GlobalsIntro title="Model as array">
      Multiple <code>v-checkbox</code>'s can share the same <code>v-model</code> by using an array.
    </GlobalsIntro>
    <GlobalsCodePre :code="ModelAsArray">
      <div class="d-flex">
        <v-checkbox v-model="selected" label="John" value="John" />
        <v-checkbox v-model="selected" label="Jacob" color="success" value="Jacob" />
        <v-checkbox v-model="selected" label="Johnson" color="info" value="Johnson" />
      </div>

      <div class="mt-3">
        {{ selected }}
      </div>
    </GlobalsCodePre>
  </div>
</template>
