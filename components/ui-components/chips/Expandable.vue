<script setup>
import { Expandable } from "./__code";

const isMenuVisible = ref(false);
</script>

<template>
  <div id="expandable">
    <GlobalsIntro title="In Selects">
      Chips can be combined with <code>v-menu</code> to enable a specific set of actions for a chip.
    </GlobalsIntro>
    <GlobalsCodePre :code="Expandable">
      <v-menu v-model="isMenuVisible" transition="scale-transition">
        <!-- v-menu activator -->
        <template #activator="{ props }">
          <v-chip v-bind="props"> VueJS </v-chip>
        </template>

        <!-- v-menu list -->
        <v-list>
          <v-list-item>
            <v-list-item-title class="mb-2"> VueJS </v-list-item-title>
            <v-list-item-subtitle> The Progressive JavaScript Framework </v-list-item-subtitle>

            <template #append>
              <v-list-item-action class="ms-3">
                <v-btn
                  icon
                  variant="text"
                  size="x-small"
                  color="default"
                  @click="isMenuVisible = false"
                >
                  <v-icon size="20" icon="tabler-square-rounded-x" />
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
      </v-menu>
    </GlobalsCodePre>
  </div>
</template>
