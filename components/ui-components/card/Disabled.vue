<script setup>
import { Disabled } from "./__code";
</script>

<template>
  <div id="disabled">
    <GlobalsIntro title="Disabled">
      The <code>disabled</code> prop can be added in order to prevent a user from interacting with
      the card.
    </GlobalsIntro>
    <GlobalsCodePre :code="Disabled">
      <v-card color="error" class="mx-auto my-8" max-width="344" link disabled>
        <v-card-item>
          <v-card-title class="text-white"> Disabled card </v-card-title>
          <v-card-subtitle class="text-white"> The card stays disabled </v-card-subtitle>
        </v-card-item>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
