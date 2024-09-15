export const Basic = `<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :color="isHovering ? 'primary' : undefined"
        title="Hover over me"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
      />
    </template>
  </v-hover>
</template>`;

export const Disabled = `<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-hover v-slot="{ isHovering, props }" disabled>
        <v-card
          :elevation="isHovering ? 12 : 2"
          class="mx-auto"
          height="350"
          max-width="350"
          v-bind="props"
          color="background"
        >
          <v-card-text class="my-4 text-center text-h6"> Hover over me! </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>`;

export const Delay = `<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-card
          :elevation="isHovering ? 16 : 2"
          :class="{ 'on-hover': isHovering }"
          class="mx-auto"
          height="350"
          max-width="350"
          color="primary"
          variant="tonal"
          v-bind="props"
        >
          <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
            Open Delay (Mouse enter)
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="6">
      <v-hover v-slot="{ isHovering, props }" close-delay="200">
        <v-card
          :elevation="isHovering ? 16 : 2"
          :class="{ 'on-hover': isHovering }"
          class="mx-auto"
          height="350"
          max-width="350"
          v-bind="props"
          color="primary"
          variant="tonal"
        >
          <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
            Close Delay (Mouse leave)
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>`;

export const List = `<script setup>
import hover1 from '/images/components/hover/1.jpg'
import hover2 from '/images/components/hover/2.jpg'
import hover3 from '/images/components/hover/3.jpg'

const icons = ['tabler-player-track-prev', 'tabler-play', 'tabler-player-track-next']

const items = [
  {
    title: 'New Releases',
    text: "It's New Release Friday",
    subtext: 'Newly released songs.',
    img: hover1
  },
  {
    title: 'Rock',
    text: 'Greatest Rock Hits',
    subtext: 'Lose yourself in rock tunes.',
    img: hover2
  },
  {
    title: 'Mellow Moods',
    text: 'Ambient Bass',
    subtext: 'Chill beats to mellow you out.',
    img: hover3
  }
]

const transparent = 'rgba(255, 255, 255, 0)'
</script>

<template>
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
</style>`;

export const Transition = `<script setup>
  import hover4 from '/images/components/hover/4.png'
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card class="mx-auto" max-width="600" v-bind="props">
      <v-img :aspect-ratio="16 / 9" cover :src="hover4">
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-primary v-card--reveal text-h2"
            style="height: 100%"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-text class="pt-6">
        <div class="font-weight-light text-grey text-h6 mb-2">For the perfect meal</div>

        <h3 class="text-h4 text-primary mb-2">QW cooking utensils</h3>

        <div class="font-weight-light text-h6 mb-2">
          Our Vintage kitchen utensils delight any chef.<br />
          Made of bamboo by hand
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
  }
</style>`;
