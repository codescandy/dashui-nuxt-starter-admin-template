<script setup>
import { Grids } from "./__code";
import card4 from "/images/components/card/4.webp";
import card5 from "/images/components/card/5.png";
import card6 from "/images/components/card/6.jpg";

const cards = [
  {
    title: "Pre-fab homes",
    src: card6,
    flex: 12,
  },
  {
    title: "Favorite road trips",
    src: card4,
    flex: 6,
  },
  {
    title: "Best airlines",
    src: card5,
    flex: 6,
  },
];
</script>

<template>
  <div id="grids">
    <GlobalsIntro title="Grids">
      Using <code>grids</code>, you can create beautiful layouts.
    </GlobalsIntro>
    <GlobalsCodePre :code="Grids">
      <v-card class="mx-auto pa-3" color="background" max-width="500">
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card class="ma-2">
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
                <v-card-title class="text-white">
                  {{ card.title }}
                </v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
                <icon-btn color="error" size="small" icon="tabler-heart" />
                <icon-btn color="primary" size="small" icon="tabler-bookmark" />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
