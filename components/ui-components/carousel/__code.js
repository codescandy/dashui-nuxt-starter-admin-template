export const Basic = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel>
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;

export const CustomDelimiter = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel :continuous="false" delimiter-icon="tabler-square">
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;

export const Cycle = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;

export const HideControls = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel show-arrows="false">
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;

export const CustomizedArrows = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel show-arrows hide-delimiter-background>
    <template v-slot:prev="{ props }">
      <icon-btn
        icon="tabler-caret-left"
        @click="props.onClick"
        variant="elevated"
        color="success"
        size="x-large"
      >
        <v-icon icon="tabler-caret-left" size="50" />
      </icon-btn>
    </template>
    <template v-slot:next="{ props }">
      <icon-btn
        icon="tabler-caret-left"
        @click="props.onClick"
        variant="elevated"
        color="success"
        size="x-large"
      >
        <v-icon icon="tabler-caret-right" size="50" />
      </icon-btn>
    </template>
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;

export const HideDelimiters = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel hide-delimiters>
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;

export const Progress = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel progress="primary">
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;

export const Continuous = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel :continuous="false">
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;

export const Direction = `<script setup>
  import carousel1 from '/images/components/carousel/1.jpg'
  import carousel2 from '/images/components/carousel/2.jpg'
  import carousel3 from '/images/components/carousel/3.jpg'
</script>

<template>
  <v-carousel direction="vertical">
    <v-carousel-item :src="carousel1" cover></v-carousel-item>
    <v-carousel-item :src="carousel2" cover></v-carousel-item>
    <v-carousel-item :src="carousel3" cover></v-carousel-item>
  </v-carousel>
</template>`;
