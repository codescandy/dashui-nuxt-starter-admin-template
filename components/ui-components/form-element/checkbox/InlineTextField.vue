<script setup>
import { InlineTextField } from "./__code";

const includeFiles = ref(true);
const isInputEnabled = ref(false);
</script>

<template>
  <div id="inline-text-field">
    <GlobalsIntro title="Inline text-field">
      You can place <code>v-checkbox </code> in line with other components such as
      <code>v-text-field</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="InlineTextField" flex>
      <v-row>
        <v-col sm="1" cols="2" class="d-flex align-end">
          <v-checkbox v-model="includeFiles" />
        </v-col>

        <v-col sm="11" cols="10">
          <global-text-field label="Include files" placeholder="Placeholder Text" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="2" sm="1" class="d-flex align-end">
          <v-checkbox v-model="isInputEnabled" />
        </v-col>

        <v-col cols="10" sm="11">
          <global-text-field
            :disabled="!isInputEnabled"
            label="I only work if you check the box"
            placeholder="Placeholder Text"
          />
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
