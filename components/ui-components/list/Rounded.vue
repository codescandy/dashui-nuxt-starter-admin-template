<script setup>
import { Rounded } from "./__code";

const items = [
  {
    title: "Cupcake sesame snaps dessert marzipan.",
    value: 1,
    props: {
      prependIcon: "tabler-brand-instagram",
      rounded: "xl",
    },
  },
  {
    title: "Jelly beans jelly-o gummi bears chupa chups marshmallow.",
    value: 2,
    props: {
      prependIcon: "tabler-brand-facebook",
      rounded: "xl",
    },
  },
  {
    title: "Bonbon macaroon gummies pie jelly",
    value: 3,
    props: {
      prependIcon: "tabler-brand-twitter",
      rounded: "xl",
    },
  },
  {
    title: "halvah icing marshmallow",
    value: 4,
    props: {
      prependIcon: "tabler-brand-instagram",
      rounded: "xl",
    },
  },
];
</script>
<template>
  <div id="rounded">
    <GlobalsIntro title="Rounded">
      You can make <code>v-list-item</code> rounded using rounded <code>prop</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Rounded" background>
      <v-card class="mx-auto" max-width="374">
        <v-list :items="items" />
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
