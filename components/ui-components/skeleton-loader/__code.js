export const Basic = `<template>
  <v-skeleton-loader type="card" />
</template>`;

export const Type = `<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-skeleton-loader class="mx-auto border-1" max-width="300" type="card-avatar, actions" />
    </v-col>

    <v-col cols="12" md="6">
      <v-skeleton-loader class="mx-auto border-1" max-width="300" type="image, article" />
    </v-col>
  </v-row>
</template>`;

export const Loading = `<script setup>
  const loading = ref(true)
</script>

<template>
  <div class="text-center">
    <v-btn class="mb-5" @click="loading = !loading"> Toggle Loading </v-btn>
  </div>

  <v-row justify="center">
    <v-col class="mb-12" cols="12" md="6">
      <div class="text-body text-center mb-2">Using slot</div>

      <v-skeleton-loader :loading="loading" type="list-item-two-line">
        <v-list-item title="Title" subtitle="Subtitle" lines="two" rounded></v-list-item>
      </v-skeleton-loader>
    </v-col>

    <v-col cols="12" md="6">
      <div class="text-body text-center mb-2">Using if</div>

      <v-skeleton-loader v-if="loading" type="list-item-two-line" />

      <v-list-item v-else title="Title" subtitle="Subtitle" lines="two" rounded></v-list-item>
    </v-col>
  </v-row>
</template>`;

export const Elevation = `<template>
  <v-skeleton-loader
    class="mx-auto"
    elevation="12"
    max-width="400"
    type="table-heading, list-item-two-line, image, table-tfoot"
  />
</template>`;

export const Boilerplate = `<template>
  <v-skeleton-loader
    boilerplate
    class="mx-auto"
    elevation="2"
    max-width="360"
    type="card-avatar, article, actions"
  />
</template>`;

export const Example = `<script setup>
  import skeleton1 from '/images/components/skeleton-loader/1.jpg'
  import skeleton2 from '/images/components/skeleton-loader/2.jpg'
  import skeleton3 from '/images/components/skeleton-loader/3.jpg'

  const cards = [
    {
      title: 'Homemade Dulce de Leche Ice Cream with Chocolate Chips',
      subtitle: 'Happy Foods',
      src: skeleton1
    },
    {
      title: 'Salted Caramel Swirl Ice Cream',
      subtitle: 'Stone Kitchen',
      src: skeleton2
    },
    {
      title: 'Peanut Butter No-Churn Ice Cream',
      subtitle: 'The Sweeter Side',
      src: skeleton3
    }
  ]

  const loading = ref(true)
</script>

<template>
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
</template>`;
