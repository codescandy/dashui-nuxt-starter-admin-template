<script setup>
import { Density } from "./__code";

const items = [
  {
    title: "halvah icing marshmallow",
    value: 1,
  },
  {
    title: "Cake caramels donut danish muffin biscuit",
    value: 2,
  },
  {
    title: "Chocolate cake pie lollipop",
    value: 3,
  },
  {
    title: "Apple pie toffee pudding gummi bears",
    value: 4,
  },
  {
    title: "Jujubes chupa chups cheesecake tart",
    value: 5,
  },
  {
    title: "Candy fruitcake bonbon sesame snaps dessert",
    value: 6,
  },
  {
    title: "Candy wafer tiramisu sugar plum sweet.",
    value: 7,
  },
  {
    title: "Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",
    value: 8,
  },
];
</script>
<template>
  <div id="density">
    <GlobalsIntro title="Density">
      Use <code>density</code> prop to adjusts the spacing within the component. Available options
      are: <code>default</code>, <code>comfortable</code>, and <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density" background>
      <v-card class="mx-auto" max-width="374">
        <v-list density="compact" :items="items" />
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
