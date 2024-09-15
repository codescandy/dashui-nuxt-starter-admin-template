<script setup>
import { Rounded } from "./__code";
</script>

<template>
  <div id="rounded">
    <GlobalsIntro title="Rounded">
      Use <code>rounded</code> prop to applies <code>border-radius:</code> to the footer,
    </GlobalsIntro>
    <GlobalsCodePre :code="Rounded">
      <v-footer rounded color="primary">
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
          </v-col>
        </v-row>
      </v-footer>
    </GlobalsCodePre>
  </div>
</template>
