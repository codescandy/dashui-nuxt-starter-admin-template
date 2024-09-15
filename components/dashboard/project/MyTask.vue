<script setup>
const menuList = [
  { title: "Action" },
  { title: "Another Action" },
  { title: "Something elese here" },
];

const tableHeader = ["", "Name", "Deadline", "Status"];

const tableData = [
  {
    id: 1,
    name: "Design a FreshCart Home page",
    deadline: "Today",
    status: 1,
  },
  {
    id: 2,
    name: "Dash UI Dark Version Design",
    deadline: "Yesterday",
    status: 3,
  },
  {
    id: 3,
    name: "Dash UI landing page design",
    deadline: "16 Sept, 2023",
    status: 2,
  },
  {
    name: "Next.js Dash UI version",
    deadline: "23 Sept, 2023",
    status: 1,
  },
  {
    name: "Develop a Dash UI Laravel",
    deadline: "23 Sept, 2023",
    status: 3,
  },
  {
    name: "Coach home page design",
    deadline: "12 Sept, 2023",
    status: 1,
  },
  {
    name: "Develop a Dash UI Vue Js",
    deadline: "11 Sept, 2023",
    status: 3,
  },
];

const resolveStatusVariant = (status) => {
  if (status === 1)
    return {
      color: "success",
      text: "Approved",
    };
  else if (status === 2)
    return {
      color: "warning",
      text: "In Progress",
    };
  else
    return {
      color: "error",
      text: "Pending",
    };
};
</script>

<template>
  <v-card class="h-100">
    <v-card-title class="d-flex align-center justify-space-between">
      <h4 class="text-h4">My Task</h4>
      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            class="text-button"
            size="small"
            variant="outlined"
            color="secondary"
          >
            Task <v-icon icon="tabler-chevron-down" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in menuList" :key="i" :value="item.title">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-divider />
    <v-table hover>
      <thead>
        <tr>
          <th v-for="item in tableHeader" :key="item">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.name">
          <td class="w-36">
            <v-checkbox />
          </td>
          <td class="min-w-65">
            {{ item.name }}
          </td>
          <td class="min-w-37">
            {{ item.deadline }}
          </td>
          <td>
            <v-chip
              size="x-small"
              class="font-weight-6"
              :color="resolveStatusVariant(item.status).color"
              label
            >
              {{ resolveStatusVariant(item.status).text }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
