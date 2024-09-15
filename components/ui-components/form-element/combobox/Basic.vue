<script setup>
import { Basic } from "./__code";

const selectedItem = ref("Programming");

const items = ["Programming", "Design", "Vue", "Vuetify"];
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      With Combobox, you can allow a user to create new values that may not be present in a provided
      items list.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <global-combobox v-model="selectedItem" :items="items" placeholder="deployment" />
    </GlobalsCodePre>
  </div>
</template>
