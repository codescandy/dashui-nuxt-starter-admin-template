export const Default = `<template>
  <v-layout style="height: 50px">
    <v-system-bar>
      <v-icon icon="tabler-wifi"></v-icon>
      <v-icon icon="tabler-building-broadcast-tower" class="ms-2"></v-icon>
      <v-icon icon="tabler-battery-2-filled" class="ms-2"></v-icon>

      <span class="ms-2">3:13PM</span>
    </v-system-bar>
  </v-layout>
</template>`

export const Color = `<template>
  <v-layout style="height: 50px">
    <v-system-bar color="primary">
      <v-icon icon="tabler-wifi"></v-icon>
      <v-icon icon="tabler-building-broadcast-tower" class="ms-2"></v-icon>
      <v-icon icon="tabler-battery-2-filled" class="ms-2"></v-icon>

      <span class="ms-2">3:13PM</span>
    </v-system-bar>
  </v-layout>

  <v-layout style="height: 50px">
    <v-system-bar color="info">
      <v-icon icon="tabler-wifi"></v-icon>
      <v-icon icon="tabler-building-broadcast-tower" class="ms-2"></v-icon>
      <v-icon icon="tabler-battery-2-filled" class="ms-2"></v-icon>

      <span class="ms-2">3:13PM</span>
    </v-system-bar>
  </v-layout>

  <v-layout style="height: 50px">
    <v-system-bar color="success">
      <v-icon icon="tabler-wifi"></v-icon>
      <v-icon icon="tabler-building-broadcast-tower" class="ms-2"></v-icon>
      <v-icon icon="tabler-battery-2-filled" class="ms-2"></v-icon>

      <span class="ms-2">3:13PM</span>
    </v-system-bar>
  </v-layout>
</template>`

export const Window = `<template>
  <v-layout style="height: 50px">
    <v-system-bar window>
      <v-icon icon="tabler-message" class="me-2"></v-icon>

      <span>10 unread messages</span>

      <v-spacer></v-spacer>

      <v-btn icon="tabler-minus" variant="text" size="34" />
      <v-btn
        icon="tabler-maximize"
        variant="text"
        size="34"
      />
      <v-btn icon="tabler-x" variant="text" size="34" />
    </v-system-bar>
  </v-layout>
</template>`
