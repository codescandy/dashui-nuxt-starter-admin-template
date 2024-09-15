<script setup>
import { Density } from "./__code";

const desserts = [
  {
    dessert: "Frozen Yogurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: "Ice cream sandwich",
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: "Eclair",
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: "Cupcake",
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: "Gingerbread",
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
];
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      You can show a dense version of the table by using the <code>density</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
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
    </GlobalsCodePre>
  </div>
</template>
