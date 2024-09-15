export const Basic = `<script setup>
  import parallax1 from '/images/components/parallax/1.jpg
</script>

<template>
  <v-parallax :src="parallax1" />
</template>`;

export const Content = `<script setup>
  import parallax2 from '/images/components/parallax/2.jpg
</script>

<template>
  <v-parallax :src="parallax2">
    <div class="d-flex flex-column fill-height justify-center align-center">
      <h1 class="text-h3 mb-4 text-white">App Name</h1>
      <h4 class="subheading text-white">Build your application today!</h4>
    </div>
  </v-parallax>
</template>`;

export const CustomHeight = `<script setup>
  import parallax3 from '/images/components/parallax/3.jpg
</script>

<template>
<v-parallax :src="parallax1" height="300"/>
</template>`;
