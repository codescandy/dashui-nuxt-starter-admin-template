<script setup>
import { Loading } from "./__code";

import card10 from "/images/components/card/10.avif";

const loading = ref(false);
const selection = ref(1);
const reserve = () => {
  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
};
</script>

<template>
  <div id="loading">
    <GlobalsIntro title="Loading">
      Use an indeterminate <code>v-progress-linear</code> to indicate a loading state.
    </GlobalsIntro>
    <GlobalsCodePre :code="Loading">
      <v-card :loading="loading" class="mx-auto my-12" max-width="374" color="background">
        <template #loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="primary"
            height="6"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img cover height="250" :src="card10" />

        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>

            <v-icon color="error" icon="tabler-flame" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating :model-value="4.5" density="compact" half-increments readonly size="small" />
            <div class="text-grey ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
            seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4">
          <v-chip-group v-model="selection" color="primary">
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </div>

        <v-card-actions>
          <v-btn variant="flat" @click="reserve"> Reserve </v-btn>
        </v-card-actions>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
