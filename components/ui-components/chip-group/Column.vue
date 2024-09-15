<script setup>
import { Column } from "./__code";
const tags = [
  "Work",
  "Home Improvement",
  "Vacation",
  "Food",
  "Drawers",
  "Shopping",
  "Art",
  "Tech",
  "Creative Writing",
];
</script>
<template>
  <div id="column">
    <GlobalsIntro title="Column">
      Chip groups with <code>column</code> prop can wrap their chips.
    </GlobalsIntro>
    <GlobalsCodePre :code="Column">
      <v-row justify="center">
        <v-col cols="12" sm="7" md="6" lg="5">
          <v-sheet class="bg-background" rounded="xl">
            <v-sheet class="pa-3 bg-primary text-right" rounded="t-xl">
              <icon-btn>
                <v-icon icon="tabler-file-signal" />
              </icon-btn>

              <icon-btn class="ms-2">
                <v-icon icon="tabler-check" />
              </icon-btn>
            </v-sheet>

            <div class="pa-4">
              <v-chip-group selected-class="text-primary" column>
                <v-chip v-for="tag in tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>
