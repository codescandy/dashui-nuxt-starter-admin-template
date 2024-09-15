export const Basic = `<template>
  <v-slide-group show-arrows>
    <v-slide-group-item v-for="n in 25" :key="n" v-slot="{ isSelected, toggle }">
      <v-btn class="ma-2" rounded :color="isSelected ? 'primary' : undefined" @click="toggle">
        Options {{ n }}
      </v-btn>
    </v-slide-group-item>
  </v-slide-group>
</template>`;

export const ActiveClass = `<script setup>
  const model = ref(null)
</script>

<template>
  <v-slide-group v-model="model" selected-class="bg-success" show-arrows>
    <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
      <v-card
        color="background"
        :class="['ma-2', selectedClass]"
        height="200"
        width="200"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon v-if="isSelected" color="white" size="48" icon="tabler-x"></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>`;

export const CenterActive = `<script setup>
  const model = ref(null)
</script>

<template>
  <v-slide-group v-model="model" selected-class="bg-primary" show-arrows center-active>
    <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
      <v-card
        color="background"
        :class="['ma-2', selectedClass]"
        height="200"
        width="200"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon v-if="isSelected" color="white" size="48" icon="tabler-x"></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>`;

export const CustomIcons = `<script setup>
  const model = ref(null)
</script>

<template>
  <v-slide-group
    v-model="model"
    selected-class="bg-primary"
    show-arrows
    prev-icon="tabler-minus"
    next-icon="tabler-plus"
  >
    <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
      <v-card
        color="background"
        :class="['ma-2', selectedClass]"
        height="200"
        width="200"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon v-if="isSelected" color="white" size="48" icon="tabler-x"></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>`;

export const Mandatory = `<script setup>
  const model = ref(null)
</script>

<template>
  <v-slide-group
    v-model="model"
    selected-class="bg-primary"
    show-arrows
    mandatory
  >
    <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
      <v-card
        color="background"
        :class="['ma-2', selectedClass]"
        height="200"
        width="200"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon v-if="isSelected" color="white" size="48" icon="tabler-x"></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>`;

export const Multiple = `<script setup>
  const model = ref([])
</script>

<template>
  <v-slide-group
    v-model="model"
    selected-class="bg-primary"
    show-arrows
    multiple
  >
    <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
      <v-card
        color="background"
        :class="['ma-2', selectedClass]"
        height="200"
        width="200"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon v-if="isSelected" color="white" size="48" icon="tabler-x"></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>`;

export const PseudoCarousel = `<script setup>
  const model = ref(null)
</script>

<template>
  <v-slide-group
    v-model="model"
    selected-class="bg-primary"
    show-arrows
  >
    <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
      <v-card
        color="background"
        :class="['ma-2', selectedClass]"
        height="200"
        width="200"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon v-if="isSelected" color="white" size="48" icon="tabler-x"></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>

  <v-expand-transition>
    <v-sheet v-if="model != null" height="100">
      <div class="d-flex fill-height align-center justify-center">
        <h3 class="text-h5">Selected {{ model }}</h3>
      </div>
    </v-sheet>
  </v-expand-transition>
</template>`;
