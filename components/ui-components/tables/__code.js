export const Basic = `<script setup>
  const desserts = [
    {
      dessert: 'Frozen Yogurt',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Ice cream sandwich',
      calories: 237,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Eclair',
      calories: 262,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Cupcake',
      calories: 305,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Gingerbread',
      calories: 356,
      fat: 6,
      carbs: 24,
      protein: 4
    }
  ]
</script>

<template>
  <v-table class="text-no-wrap">
    <thead>
      <tr>
        <th>Desserts(100g Servings)</th>
        <th>Calories</th>
        <th>Fat(g)</th>
        <th>Carbs(g)</th>
        <th>Protein(g)</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in desserts" :key="item.dessert">
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>`

export const Theme = `<script setup>
  const desserts = [
    {
      dessert: 'Frozen Yogurt',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Ice cream sandwich',
      calories: 237,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Eclair',
      calories: 262,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Cupcake',
      calories: 305,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Gingerbread',
      calories: 356,
      fat: 6,
      carbs: 24,
      protein: 4
    }
  ]
</script>

<template>
  <v-table class="text-no-wrap" theme="dark">
    <thead>
      <tr>
        <th>Desserts(100g Servings)</th>
        <th>Calories</th>
        <th>Fat(g)</th>
        <th>Carbs(g)</th>
        <th>Protein(g)</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in desserts" :key="item.dessert">
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>`

export const Density = `<script setup>
  const desserts = [
    {
      dessert: 'Frozen Yogurt',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Ice cream sandwich',
      calories: 237,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Eclair',
      calories: 262,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Cupcake',
      calories: 305,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Gingerbread',
      calories: 356,
      fat: 6,
      carbs: 24,
      protein: 4
    }
  ]
</script>

<template>
  <v-table class="text-no-wrap" density="compact">
    <thead>
      <tr>
        <th>Desserts(100g Servings)</th>
        <th>Calories</th>
        <th>Fat(g)</th>
        <th>Carbs(g)</th>
        <th>Protein(g)</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in desserts" :key="item.dessert">
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>`

export const Height = `<script setup>
  const desserts = [
    {
      dessert: 'Frozen Yogurt',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Ice cream sandwich',
      calories: 237,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Eclair',
      calories: 262,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Cupcake',
      calories: 305,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Gingerbread',
      calories: 356,
      fat: 6,
      carbs: 24,
      protein: 4
    }
  ]
</script>

<template>
  <v-table class="text-no-wrap" height="250">
    <thead>
      <tr>
        <th>Desserts(100g Servings)</th>
        <th>Calories</th>
        <th>Fat(g)</th>
        <th>Carbs(g)</th>
        <th>Protein(g)</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in desserts" :key="item.dessert">
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>`

export const FixedHeader = `<script setup>
  const desserts = [
    {
      dessert: 'Frozen Yogurt',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Ice cream sandwich',
      calories: 237,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Eclair',
      calories: 262,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Cupcake',
      calories: 305,
      fat: 6,
      carbs: 24,
      protein: 4
    },
    {
      dessert: 'Gingerbread',
      calories: 356,
      fat: 6,
      carbs: 24,
      protein: 4
    }
  ]
</script>

<template>
  <v-table class="text-no-wrap" height="250" fixed-header>
    <thead>
      <tr>
        <th>Desserts(100g Servings)</th>
        <th>Calories</th>
        <th>Fat(g)</th>
        <th>Carbs(g)</th>
        <th>Protein(g)</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in desserts" :key="item.dessert">
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>`
