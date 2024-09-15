<script setup>
import { Href } from "./__code";
</script>

<template>
  <div id="href">
    <GlobalsIntro title="Href">
      The card becomes an anchor with the <code>href</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Href">
      <v-card
        class="mx-auto my-4"
        variant="tonal"
        max-width="400"
        title="DashUi on Codescandy"
        prepend-icon="tabler-brand-vue"
        append-icon="tabler-link"
        href="https://dashui.codescandy.com/"
        target="_blank"
        rel="noopener"
      />
    </GlobalsCodePre>
  </div>
</template>
