<script setup>
const faq = [
  {
    title: "Will i be charged now for?",
    description:
      "Vestibulum pulvinar est at erat laoreet fringilla. Nullam imperdiet, augue non vestibulum triuam quat maxim felis. ",
  },
  {
    title: "How does a subscription work?",
    description:
      "Donec tempus imperdiet libero quis ultricies. Donec nunc nisi, imperdiet nec porta ultrices, accumsan a nibh. ",
  },
  {
    title: "Can I cancel anytime?",
    description:
      "Yes, Pellentesque habitant morbi tristique senectus et netus fficitur eget lacus eu, gravida blandit sem. Duis aliquam convallis tempor ",
  },
  {
    title: "How long is my personal?",
    description:
      "Aliquam vel sodales est. Mauris eu dignissim dolor. Praesent scelerisque dolor risus, quis viverra interdum turpis tincidunt interdum. ",
  },
  {
    title: "What are Multisite plan?",
    description:
      "Quisque accumsan odio sed congue u eleifend est porttitor nisi lobortis, sit aget dolor rhoncus tincidunt vel a mauris. ",
  },
  {
    title: "Are the files downloadable?",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fitur eget lacus eu, gravida blandit sem. ",
  },
];
</script>
<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-h2 mb-12">Frequently Asked Questions</h2>
    </v-col>
    <v-col cols="12" sm="6" lg="4" v-for="item in faq" :key="item.title">
      <h4 class="text-h4">{{ item.title }}</h4>
      <p class="text-body-1">
        {{ item.description }}
      </p>
    </v-col>
  </v-row>
</template>
