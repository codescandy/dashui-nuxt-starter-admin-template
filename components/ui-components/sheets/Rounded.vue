<script setup>
import { Rounded } from "./__code";
</script>

<template>
  <div id="rounded">
    <GlobalsIntro title="Rounded">
      The <code>rounded</code> prop adds a default <code>border-radius </code> of 4px. By default,
      the v-sheet component has no border-radius. Customize the radius’s size and location by
      providing a custom rounded value; e.g. a rounded value of tr-xl l-pill equates to
      rounded-tr-xl rounded-l-pill
    </GlobalsIntro>
    <GlobalsCodePre :code="Rounded">
      <v-row justify="space-around">
        <v-col v-for="rounded in [false, true, 'xl']" :key="String(rounded)" cols="12" md="4">
          <v-sheet class="pa-12" color="background">
            <div></div>
            <v-sheet :rounded="rounded" class="mx-auto" height="100" width="100"></v-sheet>
            <div></div>
          </v-sheet>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
