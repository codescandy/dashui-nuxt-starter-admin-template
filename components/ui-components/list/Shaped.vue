<script setup>
import { Shaped } from "./__code";

const items = [
  {
    text: "Cupcake sesame snaps dessert marzipan.",
    icon: "tabler-brand-instagram",
  },
  {
    text: "Jelly beans jelly-o gummi bears chupa chups marshmallow.",
    icon: "tabler-brand-facebook",
  },
  {
    text: "Bonbon macaroon gummies pie jelly",
    icon: "tabler-brand-twitter",
  },
];
</script>
<template>
  <div id="shaped">
    <GlobalsIntro title="Shaped">
      Shaped lists have rounded borders on one side of the <code>v-list-item</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Shaped" background>
      <v-card class="mx-auto" max-width="374">
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item.text" rounded="shaped">
            <template #prepend>
              <v-icon :icon="item.icon" />
            </template>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
