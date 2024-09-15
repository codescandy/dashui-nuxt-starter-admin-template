<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-skeleton-loader</code> component provides a user with a visual indicator that
      content is coming / loading. This is better received than traditional full-screen loaders.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-skeleton-loader type="card" />
    </GlobalsCodePre>
  </div>
</template>
