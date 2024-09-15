<script setup>
import { ControllableProps } from "./__code";
import dataIterators1 from "/images/components/data-iterators/1.png";
import dataIterators2 from "/images/components/data-iterators/2.png";
import dataIterators3 from "/images/components/data-iterators/3.png";
import dataIterators4 from "/images/components/data-iterators/4.png";
import dataIterators5 from "/images/components/data-iterators/5.png";
import dataIterators6 from "/images/components/data-iterators/6.png";
import dataIterators7 from "/images/components/data-iterators/7.png";
import dataIterators8 from "/images/components/data-iterators/8.png";

const search = ref("");
const games = [
  {
    img: dataIterators1,
    title: "Underwater VR Exploration Adventure",
    subtitle: "Dive deep into the ocean and discover the mysteries of the underwater world.",
    advanced: true,
    duration: "11 minutes",
  },
  {
    img: dataIterators2,
    title: "Epic Adventures in Open Worlds",
    subtitle: "Embark on a journey through vast, immersive landscapes and quests.",
    advanced: true,
    duration: "10 minutes",
  },
  {
    img: dataIterators3,
    title: "Surviving the Space Station Horror",
    subtitle: "Navigate a haunted space station in this chilling survival horror game.",
    advanced: false,
    duration: "9 minutes",
  },
  {
    img: dataIterators4,
    title: "The Sci-Fi Shooter Experience",
    subtitle: "Dive into a futuristic world of intense battles and alien encounters.",
    advanced: false,
    duration: "8 minutes",
  },
  {
    img: dataIterators5,
    title: "Neon-Lit High-Speed Racing Thrills",
    subtitle: "Experience adrenaline-pumping races in a futuristic, neon-soaked city.",
    advanced: true,
    duration: "12 minutes",
  },
  {
    img: dataIterators6,
    title: "Retro-Style Platformer Adventures",
    subtitle: "Jump and dash through pixelated worlds in this classic-style platformer.",
    advanced: false,
    duration: "11 minutes",
  },
  {
    img: dataIterators7,
    title: "Medieval Strategic War Campaigns",
    subtitle: "Lead armies into epic battles and conquer kingdoms in this strategic game.",
    advanced: true,
    duration: "10 minutes",
  },
  {
    img: dataIterators8,
    title: "1920s Mystery Detective Chronicles",
    subtitle: "Solve crimes and uncover secrets in the glamourous 1920s era.",
    advanced: false,
    duration: "9 minutes",
  },
];
</script>

<template>
  <div id="controllable-props">
    <GlobalsIntro title="Controllable props">
      Sorting, filters and pagination can be controlled externally by using the individual props
    </GlobalsIntro>
    <GlobalsCodePre :code="ControllableProps">
      <v-data-iterator :items="games" :items-per-page="3" :search="search">
        <template v-slot:header>
          <v-toolbar class="px-2 mb-4">
            <v-text-field
              v-model="search"
              clearable
              density="comfortable"
              hide-details
              placeholder="Search"
              prepend-inner-icon="tabler-search"
              style="max-width: 300px"
              variant="solo"
            ></v-text-field>
          </v-toolbar>
        </template>

        <template v-slot:default="{ items }">
          <v-container class="pa-2" fluid>
            <v-row dense>
              <v-col v-for="item in items" :key="item.title" cols="auto" md="4">
                <v-card class="pb-3" border flat>
                  <v-img :src="item.raw.img"></v-img>

                  <v-list-item class="mb-2" :subtitle="item.raw.subtitle">
                    <template v-slot:title>
                      <strong class="text-body-1 font-weight-bold mb-2">{{
                        item.raw.title
                      }}</strong>
                    </template>
                  </v-list-item>

                  <div class="d-flex justify-space-between px-4">
                    <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                      <v-icon icon="tabler-clock" start></v-icon>

                      <div class="text-truncate">{{ item.raw.duration }}</div>
                    </div>

                    <v-btn border flat size="small" class="text-none" text="Read"> </v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
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
