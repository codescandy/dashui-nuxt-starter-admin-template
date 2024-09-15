<script setup>
import { Popover } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";

const menu = ref(false);
</script>
<template>
  <div id="popover">
    <GlobalsIntro title="Popover">
      A menu can be configured to be static when opened, allowing it to function as a popover. This
      can be useful when there are multiple interactive items within the menu contents.
    </GlobalsIntro>
    <GlobalsCodePre :code="Popover">
      <v-menu v-model="menu" location="top">
        <template #activator="{ props }">
          <v-btn v-bind="props"> Menu as Popover </v-btn>
        </template>

        <v-card max-width="300">
          <v-list>
            <v-list-item
              :prepend-avatar="avatar1"
              title="John Leider"
              subtitle="Founder of Vuetify"
              class="mx-0"
            />
          </v-list>

          <VDivider />

          <v-card-text>
            Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert
            candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
          </v-card-text>

          <v-card-actions>
            <icon-btn icon="tabler-heart" />
            <icon-btn icon="tabler-bookmark" />
            <icon-btn icon="tabler-thumb-down" />
          </v-card-actions>
        </v-card>
      </v-menu>
    </GlobalsCodePre>
  </div>
</template>
