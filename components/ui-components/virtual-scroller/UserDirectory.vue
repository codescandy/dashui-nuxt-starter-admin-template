<script setup>
import { UserDirectory } from "./__code";

const colors = [
  "#2196F3",
  "#90CAF9",
  "#64B5F6",
  "#42A5F5",
  "#1E88E5",
  "#1976D2",
  "#1565C0",
  "#0D47A1",
  "#82B1FF",
  "#448AFF",
  "#2979FF",
  "#2962FF",
];
const names = [
  "Oliver",
  "Jake",
  "Noah",
  "James",
  "Jack",
  "Connor",
  "Liam",
  "John",
  "Harry",
  "Callum",
  "Mason",
  "Robert",
  "Jacob",
  "Jacob",
  "Jacob",
  "Michael",
  "Charlie",
  "Kyle",
  "William",
  "William",
  "Thomas",
  "Joe",
  "Ethan",
  "David",
  "George",
  "Reece",
  "Michael",
  "Richard",
  "Oscar",
  "Rhys",
  "Alexander",
  "Joseph",
  "James",
  "Charlie",
  "James",
  "Charles",
  "William",
  "Damian",
  "Daniel",
  "Thomas",
  "Amelia",
  "Margaret",
  "Emma",
  "Mary",
  "Olivia",
  "Samantha",
  "Olivia",
  "Patricia",
  "Isla",
  "Bethany",
];
const surnames = [
  "Smith",
  "Anderson",
  "Clark",
  "Wright",
  "Mitchell",
  "Johnson",
  "Thomas",
  "Rodriguez",
  "Lopez",
  "Perez",
  "Williams",
  "Jackson",
  "Lewis",
  "Hill",
  "Roberts",
  "Jones",
  "White",
  "Lee",
  "Scott",
  "Turner",
  "Brown",
  "Harris",
  "Walker",
  "Green",
  "Phillips",
  "Davis",
  "Martin",
  "Hall",
  "Adams",
  "Campbell",
  "Miller",
  "Thompson",
  "Allen",
  "Baker",
  "Parker",
  "Wilson",
  "Garcia",
  "Young",
  "Gonzalez",
  "Evans",
  "Moore",
  "Martinez",
  "Hernandez",
  "Nelson",
  "Edwards",
  "Taylor",
  "Robinson",
  "King",
  "Carter",
  "Collins",
];

const itemsUserDirectory = computed(() => {
  const namesLength = names.length;
  const surnamesLength = surnames.length;
  const colorsLength = colors.length;

  return Array.from({ length: 10000 }, () => {
    const name = names[genRandomIndex(namesLength)];
    const surname = surnames[genRandomIndex(surnamesLength)];

    return {
      color: colors[genRandomIndex(colorsLength)],
      fullName: `${name} ${surname}`,
      initials: `${name[0]} ${surname[0]}`,
    };
  });
});

const genRandomIndex = (length) => {
  return Math.ceil(Math.random() * (length - 1));
};
</script>

<template>
  <div id="user-directory">
    <GlobalsIntro title="User Directory">
      The v-virtual-scroll component can render an large amount of items by rendering only what it
      needs to fill the scroller’s viewport.
    </GlobalsIntro>
    <GlobalsCodePre :code="UserDirectory">
      <v-card class="mx-auto" color="background" max-width="400">
        <v-card-item class="bg-primary">
          <v-card-title class="text-white"> User Directory </v-card-title>

          <template v-slot:append>
            <icon-btn color="white" icon="tabler-plus" />
          </template>
        </v-card-item>

        <v-card-text class="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates
          culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla
          quos? Officiis, aperiam ducimus.
        </v-card-text>

        <v-divider></v-divider>

        <v-virtual-scroll :items="itemsUserDirectory" height="300" item-height="50">
          <template v-slot:default="{ item }">
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar :color="item.color" class="text-white" size="40">
                  {{ item.initials }}
                </v-avatar>
              </template>

              <v-list-item-title>{{ item.fullName }}</v-list-item-title>

              <template v-slot:append>
                <v-btn color="primary" size="small" variant="tonal">
                  View User

                  <v-icon end icon="tabler-share" />
                </v-btn>
              </template>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
