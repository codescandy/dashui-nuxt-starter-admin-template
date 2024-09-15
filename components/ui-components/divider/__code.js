export const Default = `<template>
  <v-divider />
</template>`;

export const Thickness = `<template>
  <v-divider :thickness="4" class="my-5" />
  <v-divider :thickness="8" class="my-5" />
  <v-divider :thickness="12" class="my-5" />
  <v-divider :thickness="16" class="my-5" />
</template>`;

export const Color = `<template>
  <v-divider :thickness="4" color="primary" class="my-5" />
  <v-divider :thickness="4" color="secondary" class="my-5" />
  <v-divider :thickness="4" color="info" class="my-5" />
  <v-divider :thickness="4" color="warning" class="my-5" />
  <v-divider :thickness="4" color="success" class="my-5" />
  <v-divider :thickness="4" color="error" class="my-5" />
</template>`;

export const Opacity = `<template>
  <v-divider
    :thickness="2"
    color="primary"
    class="my-5 border-opacity-25"
  />
  <v-divider
    :thickness="2"
    color="primary"
    class="my-5 border-opacity-50"
  />
  <v-divider
    :thickness="2"
    color="primary"
    class="my-5 border-opacity-75"
  />
  <v-divider
    :thickness="2"
    color="primary"
    class="my-5 border-opacity-100"
  />
</template>`;

export const Inset = `<script setup>
  import avatar1 from '/images/avatar/avatar-1.jpg'
  import avatar2 from '/images/avatar/avatar-2.jpg'
  import avatar3 from '/images/avatar/avatar-3.jpg'
</script>

<template>
  <v-card class="mx-auto" max-width="425">
    <v-list lines="two">
      <v-list-subheader>Today</v-list-subheader>

      <v-list-item
        :prepend-avatar="avatar1"
        title="Brunch this weekend?"
      >
        <template #subtitle>
          <span class="font-weight-bold">Ali Connors</span> &mdash
          I'll be in your neighborhood doing errands this weekend. Do
          you want to hang out?
        </template>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item :prepend-avatar="avatar2">
        <template #title>
          Summer BBQ <span class="text-grey-lighten-1">4</span>
        </template>

        <template #subtitle>
          <span class="font-weight-bold"
            >to Alex, Scott, Jennifer</span
          >
          &mdash Wish I could come, but I'm out of town this weekend.
        </template>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item :prepend-avatar="avatar3" title="Oui oui">
        <template #subtitle>
          <span class="font-weight-bold">Sandra Adams</span> &mdash
          Do you have Paris recommendations? Have you ever been?
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>`;
