<script setup>
import { ProductCard } from "./__code";

const sizes = ["04", "06", "08", "10", "12", "14"];
const selection = ref("08");
</script>

<template>
  <div id="product-card">
    <GlobalsIntro title="Product card">
      The <code>v-chip</code> component can have an explicit value used for its model. This gets
      passed to the <code>v-chip-group</code> component and is useful for when you don’t want to use
      the chips index as their values.
    </GlobalsIntro>
    <GlobalsCodePre :code="ProductCard">
      <v-card variant="outlined" class="mx-auto" max-width="400">
        <v-card-title>
          <h2 class="text-h4">Shirt Blouse</h2>
          <v-spacer></v-spacer>
          <span class="text-h6">$44.50</span>
        </v-card-title>

        <v-card-text>
          Our blouses are available in 8 colors. You can custom order a built-in arch support for
          any of the models.
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
    </GlobalsCodePre>
  </div>
</template>
