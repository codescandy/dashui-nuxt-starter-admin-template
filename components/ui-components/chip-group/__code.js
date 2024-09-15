export const Basic = `<template>
  <v-chip-group>
    <v-chip>Chip 1</v-chip>
    <v-chip>Chip 2</v-chip>
    <v-chip>Chip 3</v-chip>
  </v-chip-group>
</template>`;

export const Column = `<script setup>
  const tags = [
    'Work',
    'Home Improvement',
    'Vacation',
    'Food',
    'Drawers',
    'Shopping',
    'Art',
    'Tech',
    'Creative Writing'
  ]
</script>

<template>
  <v-row justify="center">
    <v-col cols="12" sm="7" md="6" lg="5">
      <v-sheet class="bg-background" rounded="xl">
        <v-sheet class="pa-3 bg-primary text-right" rounded="t-xl">
          <icon-btn>
            <v-icon icon="tabler-file-signal" />
          </icon-btn>

          <icon-btn class="ms-2">
            <v-icon icon="tabler-check" />
          </icon-btn>
        </v-sheet>

        <div class="pa-4">
          <v-chip-group selected-class="text-primary" column>
            <v-chip v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>`;

export const FilterResults = `<script setup>
  const amenities = ref([1, 4])
  const neighborhoods = ref([1])
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-toolbar flat color="primary" dark>
      <icon-btn>
        <v-icon icon="tabler-x" />
      </icon-btn>

      <v-toolbar-title>Filter results</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <h2 class="text-h6 mb-2">Choose amenities</h2>

      <v-chip-group v-model="amenities" column multiple>
        <v-chip filter variant="outlined"> Elevator </v-chip>
        <v-chip filter variant="outlined"> Washer / Dryer </v-chip>
        <v-chip filter variant="outlined"> Fireplace </v-chip>
        <v-chip filter variant="outlined"> Wheelchair access </v-chip>
        <v-chip filter variant="outlined"> Dogs ok </v-chip>
        <v-chip filter variant="outlined"> Cats ok </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <h2 class="text-h6 mb-2">Choose neighborhoods</h2>

      <v-chip-group v-model="neighborhoods" column multiple>
        <v-chip filter variant="outlined"> Snowy Rock Place </v-chip>
        <v-chip filter variant="outlined"> Honeylane Circle </v-chip>
        <v-chip filter variant="outlined"> Donna Drive </v-chip>
        <v-chip filter variant="outlined"> Elaine Street </v-chip>
        <v-chip filter variant="outlined"> Court Street </v-chip>
        <v-chip filter variant="outlined"> Kennedy Park </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>`;

export const Mandatory = `<script setup>
  const tags = [
    'Work',
    'Home Improvement',
    'Vacation',
    'Food',
    'Drawers',
    'Shopping',
    'Art',
    'Tech',
    'Creative Writing'
  ]
</script>

<template>
  <v-chip-group mandatory selected-class="text-primary">
    <v-chip v-for="tag in tags" :key="tag">
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>`;

export const Multiple = `<script setup>
  const tags = [
    'Work',
    'Home Improvement',
    'Vacation',
    'Food',
    'Drawers',
    'Shopping',
    'Art',
    'Tech',
    'Creative Writing'
  ]
</script>

<template>
  <v-chip-group multiple selected-class="text-primary">
    <v-chip v-for="tag in tags" :key="tag">
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>`;

export const ProductCard = `<script setup>
  const sizes = ['04', '06', '08', '10', '12', '14']
  const selection = ref('08')
</script>

<template>
  <v-card variant="outlined" class="mx-auto" max-width="400">
    <v-card-title>
      <h2 class="text-h4">Shirt Blouse</h2>
      <v-spacer></v-spacer>
      <span class="text-h6">$44.50</span>
    </v-card-title>

    <v-card-text>
      Our blouses are available in 8 colors. You can custom order a built-in arch support
      for any of the models.
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <span class="subheading">Select size</span>

      <v-chip-group v-model="selection" color="primary" mandatory>
        <v-chip v-for="size in sizes" :key="size" :value="size">
          {{ size }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn block variant="flat"> Add to Cart </v-btn>
    </v-card-actions>
  </v-card>
</template>`;
