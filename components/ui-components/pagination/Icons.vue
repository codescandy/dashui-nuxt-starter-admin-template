<script setup>
import { Icons } from "./__code";
const currentPage = ref(1);
</script>

<template>
  <div id="icons">
    <GlobalsIntro title="Icons">
      Previous and next page icons can be customized with the
      <code>prev-icon</code> and <code>next-icon </code> props.
    </GlobalsIntro>
    <GlobalsCodePre :code="Icons">
      <v-pagination
        v-model="currentPage"
        :length="5"
        prev-icon="tabler-arrow-left"
        next-icon="tabler-arrow-right"
      />
    </GlobalsCodePre>
  </div>
</template>
