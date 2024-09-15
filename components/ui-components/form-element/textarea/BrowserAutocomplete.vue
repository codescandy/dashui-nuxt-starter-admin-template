<script setup>
import { BrowserAutocomplete } from "./__code";
</script>

<template>
  <div id="browser-autocomplete">
    <GlobalsIntro title="Browser autocomplete">
      The <code>autocomplete</code> prop gives you the option to enable the browser to predict user
      input.
    </GlobalsIntro>
    <GlobalsCodePre :code="BrowserAutocomplete">
      <global-textarea autocomplete="email" label="Email" placeholder="johndoe@email.com" />
    </GlobalsCodePre>
  </div>
</template>
