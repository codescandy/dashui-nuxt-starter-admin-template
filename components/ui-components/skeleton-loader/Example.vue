<script setup>
import { Example } from "./__code";
import skeleton1 from "/images/components/skeleton-loader/1.jpg";
import skeleton2 from "/images/components/skeleton-loader/2.jpg";
import skeleton3 from "/images/components/skeleton-loader/3.jpg";

const cards = [
  {
    title: "Homemade Dulce de Leche Ice Cream with Chocolate Chips",
    subtitle: "Happy Foods",
    src: skeleton1,
  },
  {
    title: "Salted Caramel Swirl Ice Cream",
    subtitle: "Stone Kitchen",
    src: skeleton2,
  },
  {
    title: "Peanut Butter No-Churn Ice Cream",
    subtitle: "The Sweeter Side",
    src: skeleton3,
  },
];

const loading = ref(true);
</script>

<template>
  <div id="example">
    <GlobalsIntro title="Example">
      The following are a collection of examples that demonstrate more advanced and real world use
      of the <code>v-skeleton-loader</code> component.
    </GlobalsIntro>
    <GlobalsCodePre :code="Example">
      <div class="text-center mb-5">
        <v-btn @click="loading = !loading"> Toggle Loading </v-btn>
      </div>

      <v-card theme="dark" class="px-4" rounded="lg">
        <v-row>
          <v-col v-for="{ src, title, subtitle } in cards" :key="title" cols="12" md="6" lg="4">
            <v-skeleton-loader :loading="loading" height="240" type="image, list-item-two-line">
              <v-responsive>
                <v-img :src="src" class="rounded mb-2" cover height="184"></v-img>

                <v-list-item :title="title" :subtitle="subtitle" class="px-0"></v-list-item>
              </v-responsive>
            </v-skeleton-loader>
          </v-col>
        </v-row>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
