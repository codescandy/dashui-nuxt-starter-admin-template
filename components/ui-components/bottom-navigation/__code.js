export const Basic = `<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation>
      <v-btn value="recent">
        <v-icon>tabler-history</v-icon>

        <span>Recent</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>tabler-heart</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>tabler-map-pin</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>`;

export const Color = `<script setup>
  const value = ref(0)
</script>

<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation v-model="value" active color="primary">
      <v-btn value="recent">
        <v-icon>tabler-history</v-icon>

        <span>Recent</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>tabler-heart</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>tabler-map-pin</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>`;

export const Grow = `<script setup>
  const value1 = ref(0)
</script>

<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation v-model="value1" grow color="primary">
      <v-btn value="recent">
        <v-icon>tabler-history</v-icon>

        <span>Recent</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>tabler-heart</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>tabler-map-pin</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>`;

export const Horizontal = `<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation horizontal color="error">
      <v-btn value="recent">
        <v-icon>tabler-history</v-icon>

        <span>Recent</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>tabler-heart</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>tabler-map-pin</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>`;

export const Shift = `<script setup>
  const value3 = ref(1)

  const color = computed(() => {
    switch (value3.value) {
      case 0:
        return 'primary'
      case 1:
        return 'warning'
      case 2:
        return 'info'
      case 3:
        return 'error'
      default:
        return 'success'
    }
  })
</script>

<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation
      v-model="value3"
      :bg-color="color"
      mode="shift"
    >
      <v-btn>
        <v-icon>tabler-video</v-icon>

        <span>Video</span>
      </v-btn>

      <v-btn>
        <v-icon>tabler-music</v-icon>

        <span>Music</span>
      </v-btn>

      <v-btn>
        <v-icon>tabler-settings-filled</v-icon>

        <span>Setting</span>
      </v-btn>
      <v-btn>
        <v-icon>tabler-shopping-cart</v-icon>

        <span>Cart</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>`;

export const Toggel = `<script setup>
  const active = ref(true)
</script>

<template>
  <v-btn @click="active = !active"> Toggle Navigation </v-btn>

  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation :active="active">
      <v-btn value="recent">
        <v-icon>tabler-history</v-icon>

        <span>Recent</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>tabler-heart</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>tabler-map-pin</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>`;
