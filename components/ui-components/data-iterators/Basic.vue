<script setup>
import { Basic } from "./__code";

const page = ref(1);
const items = Array.from({ length: 50 }, (k, v) => ({
  title: "Item " + v + 1,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
}));
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-data-iterator</code> allows you to customize exactly how to display your data. In
      this example we are using a grid with cards.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-data-iterator :items="items" :page="page">
        <template v-slot:default="{ items }">
          <template v-for="(item, i) in items" :key="i">
            <v-card v-bind="item.raw"></v-card>

            <br />
          </template>
        </template>
        <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
          <div class="d-flex align-center justify-center pa-4">
            <v-btn
              :disabled="page === 1"
              icon="tabler-arrow-left"
              density="comfortable"
              variant="tonal"
              rounded
              @click="prevPage"
            ></v-btn>

            <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>

            <v-btn
              :disabled="page >= pageCount"
              icon="tabler-arrow-right"
              density="comfortable"
              variant="tonal"
              rounded
              @click="nextPage"
            ></v-btn>
          </div>
        </template>
      </v-data-iterator>
    </GlobalsCodePre>
  </div>
</template>
