export const Basic = `<template>
  <v-layout>
    <v-main>
      <v-app-bar elevation="10">
        <template #prepend>
          <icon-btn class="ml-2">
            <v-icon icon="tabler-menu-2" size="24" />
          </icon-btn>
        </template>

        <v-app-bar-title>Default</v-app-bar-title>

        <template #append>
          <icon-btn>
            <v-icon icon="tabler-heart" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-search" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-dots-vertical" size="24" />
          </icon-btn>
        </template>
      </v-app-bar>
    </v-main>
  </v-layout>
</template>`

export const Color = `<template>
  <v-layout>
    <v-main>
      <v-app-bar color="primary">
        <template #prepend>
          <icon-btn class="ml-2">
            <v-icon icon="tabler-menu-2" size="24" />
          </icon-btn>
        </template>

        <v-app-bar-title>Primary</v-app-bar-title>

        <template #append>
          <icon-btn>
            <v-icon icon="tabler-heart" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-search" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-dots-vertical" size="24" />
          </icon-btn>
        </template>
      </v-app-bar>
    </v-main>
  </v-layout>
</template>`

export const Density = `<template>
  <!-- default -->
  <v-layout>
    <v-main>
      <v-app-bar color="primary">
        <template #prepend>
          <icon-btn class="ml-2">
            <v-icon icon="tabler-menu-2" size="24" />
          </icon-btn>
        </template>

        <v-app-bar-title>Default</v-app-bar-title>

        <template #append>
          <icon-btn>
            <v-icon icon="tabler-heart" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-search" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-dots-vertical" size="24" />
          </icon-btn>
        </template>
      </v-app-bar>
    </v-main>
  </v-layout>

  <!-- prominent -->
  <v-layout>
    <v-main>
      <v-app-bar color="secondary" density="prominent">
        <template #prepend>
          <icon-btn class="ml-2">
            <v-icon icon="tabler-menu-2" size="24" />
          </icon-btn>
        </template>

        <v-app-bar-title>Prominent</v-app-bar-title>

        <template #append>
          <icon-btn>
            <v-icon icon="tabler-heart" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-search" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-dots-vertical" size="24" />
          </icon-btn>
        </template>
      </v-app-bar>
    </v-main>
  </v-layout>

  <!-- comfortable -->
  <v-layout>
    <v-main>
      <v-app-bar color="error" density="comfortable">
        <template #prepend>
          <icon-btn class="ml-2">
            <v-icon icon="tabler-menu-2" size="24" />
          </icon-btn>
        </template>

        <v-app-bar-title>Comfortable</v-app-bar-title>

        <template #append>
          <icon-btn>
            <v-icon icon="tabler-heart" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-search" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-dots-vertical" size="24" />
          </icon-btn>
        </template>
      </v-app-bar>
    </v-main>
  </v-layout>

  <!-- compact -->
  <v-layout>
    <v-main>
      <v-app-bar color="warning" density="compact">
        <template #prepend>
          <icon-btn class="ml-2">
            <v-icon icon="tabler-menu-2" size="24" />
          </icon-btn>
        </template>

        <v-app-bar-title>Compact</v-app-bar-title>

        <template #append>
          <icon-btn>
            <v-icon icon="tabler-heart" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-search" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-dots-vertical" size="24" />
          </icon-btn>
        </template>
      </v-app-bar>
    </v-main>
  </v-layout>
</template>`

export const Image = `<template>
  <v-layout>
    <v-main>
      <v-app-bar
        color="primary"
        image="https://picsum.photos/1920/1080?random"
      >
        <template #image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template #prepend>
          <icon-btn class="ml-2">
            <v-icon icon="tabler-menu-2" size="24" />
          </icon-btn>
        </template>

        <v-app-bar-title>Background Image</v-app-bar-title>

        <template #append>
          <icon-btn>
            <v-icon icon="tabler-heart" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-search" size="24" />
          </icon-btn>
          <icon-btn>
            <v-icon icon="tabler-dots-vertical" size="24" />
          </icon-btn>
        </template>
      </v-app-bar>
    </v-main>
  </v-layout>
</template>`
