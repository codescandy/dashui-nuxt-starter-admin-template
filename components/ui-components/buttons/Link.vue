<script setup>
import { Link } from "./__code";
</script>

<template>
  <div id="link">
    <GlobalsIntro title="Link">
      Designates that the component is a link. This is automatic when using the
      <code>href</code> or <code>to</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Link">
      <v-alert class="mb-2">
        Note: On click of the link button, You will get redirected to another page.
      </v-alert>

      <v-btn href="https://dashui.codescandy.com/"> String Literal </v-btn>

      <v-btn href="https://dashui.codescandy.com/" target="_blank" rel="noopener noreferrer">
        Open New Tab
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
