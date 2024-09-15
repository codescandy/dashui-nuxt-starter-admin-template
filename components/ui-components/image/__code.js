export const Basic = `<script setup>
  import image1 from '/images/components/image/1.jpg'
</script>

<template>
  <v-img :width="300" aspect-ratio="16/9" cover :src="image1" />
</template>`;

export const Cover = `<script setup>
  import image1 from '/images/components/image/1.jpg'
</script>

<template>
  <div class="d-flex justify-space-around align-center bg-grey-lighten-4">
    <div class="ma-4">
      <div class="text-subtitle-2">Default</div>
      <v-img class="bg-white" width="300" :aspect-ratio="1" :src="image1" />
    </div>

    <div class="ma-4">
      <div class="text-subtitle-2">Cover</div>
      <v-img class="bg-white" width="300" :aspect-ratio="1" :src="image1" cover />
    </div>
  </div>
</template>`;

export const Height = `<script setup>
  import image1 from '/images/components/image/1.jpg'
</script>

<template>
  <v-container class="fill-height" fluid style="min-height: 434px">
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card class="my-3">
            <v-img :src="image1" height="125" class="bg-background"></v-img>
            <v-card-title class="text-h6"> height </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="my-3">
            <v-img :src="image1" height="125" cover class="bg-background"></v-img>
            <v-card-title class="text-h6"> height with cover </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="my-3">
            <v-img :src="image1" max-height="125" class="bg-background"></v-img>
            <v-card-title class="text-h6"> max-height </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="my-3">
            <v-img :src="image1" max-height="125" cover class="bg-background"></v-img>
            <v-card-title class="text-h6"> max-height with cover </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>`;

export const Placeholder = `<script setup>
  import image1 from '/images/components/image/1.jpg'
</script>

<template>
    <v-img
      class="mx-auto"
      height="300"
      :lazy-src="image1"
      max-width="500"
      src="https://bad.src/not/valid"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>
</template>`;

export const Errors = `<template>
  <v-img class="mx-auto" height="300" max-width="500" src="https://bad.src/not/valid">
    <template v-slot:error>
      <v-img
        class="mx-auto"
        height="300"
        max-width="500"
        src="https://picsum.photos/500/300?image=232"
      ></v-img>
    </template>
  </v-img>
</template>`;

export const Grid = `<script setup>
  import image1 from '/images/components/image/1.jpg'
  import image2 from '/images/components/image/2.jpg'
  import image3 from '/images/components/image/3.jpg'
  import image4 from '/images/components/image/4.jpg'
  import image5 from '/images/components/image/5.jpg'
  import image6 from '/images/components/image/6.jpg'
  import image7 from '/images/components/image/7.jpg'
  import image8 from '/images/components/image/8.jpg'
  import image9 from '/images/components/image/9.jpg'

  const img = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
</script>

<template>
  <v-row>
    <v-col v-for="items in img" :key="items" class="d-flex child-flex" cols="4">
      <v-img :src="items" :lazy-src="items" aspect-ratio="1" cover class="bg-background ma-1">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>`;

export const GridComplex = `<script setup>
  const imageLayout = [
    { cols: 4 },
    {
      cols: 8,
      children: [{ cols: 12 }, { cols: 12 }]
    },
    { cols: 6 },
    { cols: 3 },
    { cols: 9 },
    { cols: 4 },
    { cols: 8 }
  ]
</script>

<template>
<v-row>
<template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
  <v-col :cols="image.cols">
    <v-img
      :src="'https://picsum.photos/500/300?image='+ image.cols * 20"
      cover
      height="100%"
    ></v-img>
  </v-col>

  <v-col v-if="image.children" cols="6" class="d-flex flex-column">
    <v-row>
      <v-col
        v-for="(children, childIdx) in image.children"
        :key="childIdx"
        :cols="children.cols"
      >
        <v-img
          :src="https://picsum.photos/500/300?image='+ children.cols + childIdx"
          cover
          height="100%"
        ></v-img>
      </v-col>
    </v-row>
  </v-col>
</template>
</v-row>
</template>`;
