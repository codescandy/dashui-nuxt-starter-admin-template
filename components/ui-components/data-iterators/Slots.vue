<script setup>
import { Slots } from "./__code";

const desserts = [
  {
    name: "Frozen Yogurt",
    description:
      "A tangy and creamy dessert made from yogurt and sometimes fruit, Frozen Yogurt is a lighter alternative to ice cream. Perfect for those who crave a sweet treat but want to keep it on the healthier side.",
    icon: "tabler-ice-cream",
    color: "#6EC1E4",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    description:
      "A classic treat featuring a layer of creamy ice cream sandwiched between two cookies or cake layers. Ideal for those hot summer days when you can't decide between a cookie and ice cream.",
    icon: "tabler-cookie",
    color: "#F4A261",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    description:
      "A small, individual cake topped with frosting and often adorned with sprinkles or other decorations. Great for parties or as a quick indulgence when you need a sugar fix.",
    icon: "tabler-cake",
    color: "#6D4C41",
    calories: 262,
    fat: 16,
    carbs: 23,
    protein: 6,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    description:
      "A small, individual cake topped with frosting and often adorned with sprinkles or other decorations. Great for parties or as a quick indulgence when you need a sugar fix.",
    color: "#FFADAD",
    icon: "tabler-cup",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
];
</script>

<template>
  <div id="slots">
    <GlobalsIntro title="Slots">
      The <code>v-data-iterator</code> has internal state for both selection and expansion, just
      like <code>v-data-table</code>. In this example we use the methods <code>isExpanded</code> and
      <code>toggleExpand</code> available on the default slot.
    </GlobalsIntro>
    <GlobalsCodePre :code="Slots" background>
      <v-data-iterator :items="desserts" item-value="name">
        <template v-slot:default="{ items, isExpanded, toggleExpand }">
          <v-row>
            <v-col v-for="item in items" :key="item.raw.name" cols="12" sm="12" md="6">
              <v-card class="pa-2">
                <v-card-title class="d-flex align-center">
                  <v-icon :color="item.raw.color" :icon="item.raw.icon" start size="18"></v-icon>

                  <h4>{{ item.raw.name }}</h4>
                </v-card-title>

                <v-card-text>
                  {{ item.raw.description }}
                </v-card-text>

                <div class="px-4">
                  <v-switch
                    :model-value="isExpanded(item)"
                    :label="`${isExpanded(item) ? 'Hide' : 'Show'} details`"
                    density="compact"
                    inset
                    @click="() => toggleExpand(item)"
                  ></v-switch>
                </div>

                <v-expand-transition>
                  <div v-if="isExpanded(item)">
                    <v-divider></v-divider>

                    <v-list density="compact" :lines="false">
                      <v-list-item
                        :title="`🔥 Calories: ${item.raw.calories}`"
                        active
                      ></v-list-item>
                      <v-list-item :title="`🍔 Fat: ${item.raw.fat}`"></v-list-item>
                      <v-list-item :title="`🍞 Carbs: ${item.raw.carbs}`"></v-list-item>
                      <v-list-item :title="`🍗 Protein: ${item.raw.protein}`"></v-list-item>
                      <v-list-item :title="`🧂 Sodium: ${item.raw.sodium}`"></v-list-item>
                      <v-list-item :title="`🦴 Calcium: ${item.raw.calcium}`"></v-list-item>
                      <v-list-item :title="`🧲 Iron: ${item.raw.iron}`"></v-list-item>
                    </v-list>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </GlobalsCodePre>
  </div>
</template>
