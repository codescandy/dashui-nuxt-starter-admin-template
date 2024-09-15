<script setup>
import { Elevation } from "./__code";
</script>

<template>
  <div id="elevation">
    <GlobalsIntro title="Elevation">
      Use <code>elevation</code> prop to applies <code>box-shadow</code> to the footer, between
      <code>0</code> and <code>24</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Elevation">
      <v-footer elevation="10">
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
          </v-col>
        </v-row>
      </v-footer>
    </GlobalsCodePre>
  </div>
</template>
