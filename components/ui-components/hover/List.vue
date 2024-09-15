<script setup>
import { List } from "./__code";
import hover1 from "/images/components/hover/1.jpg";
import hover2 from "/images/components/hover/2.jpg";
import hover3 from "/images/components/hover/3.jpg";

const icons = ["tabler-player-track-prev", "tabler-play", "tabler-player-track-next"];

const items = [
  {
    title: "New Releases",
    text: `It's New Release Friday`,
    subtext: "Newly released songs.",
    img: hover1,
  },
  {
    title: "Rock",
    text: "Greatest Rock Hits",
    subtext: "Lose yourself in rock tunes.",
    img: hover2,
  },
  {
    title: "Mellow Moods",
    text: "Ambient Bass",
    subtext: "Chill beats to mellow you out.",
    img: hover3,
  },
];

const transparent = "rgba(255, 255, 255, 0)";
</script>

<template>
  <div id="hover-list">
    <GlobalsIntro title="Hover list">
      <code>v-hover</code> can be used in combination with <code>v-for </code> to make a single item
      stand out when the user interacts with the list.
    </GlobalsIntro>
    <GlobalsCodePre :code="List">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items" :key="i">
          <v-col cols="12" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                :elevation="isHovering ? 12 : 2"
                class="hover-list-card"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
              >
                <v-img :src="item.img" height="225px" cover>
                  <v-card-title class="text-h6 text-white d-flex flex-column">
                    <p class="mt-4">
                      {{ item.title }}
                    </p>

                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold">
                        {{ item.text }}
                      </p>
                      <p class="text-caption font-weight-medium">
                        {{ item.subtext }}
                      </p>
                    </div>
                  </v-card-title>
                  <div class="align-self-center">
                    <v-btn
                      v-for="(icon, index) in icons"
                      :key="index"
                      variant="text"
                      :class="{ 'show-btns': isHovering }"
                      :color="transparent"
                      :icon="icon"
                    ></v-btn>
                  </div>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </GlobalsCodePre>
  </div>
</template>

<style scoped>
.hover-list-card {
  transition: opacity 0.4s ease-in-out;
}

.hover-list-card:not(.on-hover) {
  opacity: 0.55;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
