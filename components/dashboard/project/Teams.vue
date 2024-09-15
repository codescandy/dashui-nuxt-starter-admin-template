<script setup>
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";
import avatar5 from "/images/avatar/avatar-5.jpg";
import avatar6 from "/images/avatar/avatar-6.jpg";
import avatar7 from "/images/avatar/avatar-7.jpg";

const tableHeader = ["Name", "Role", "Last Activity", ""];

const tableData = [
  {
    name: "Anita Parmar",
    email: "anita@example.com",
    profile: avatar1,
    role: "Front End Developer",
    lastActivity: "3 May, 2023",
  },
  {
    name: "Jitu Chauhan",
    email: "jituchauhan@example.com",
    profile: avatar2,
    role: "Project Director",
    lastActivity: "Today",
  },
  {
    name: "Sandeep Chauhan",
    email: "sandeepchauhan@example.com",
    profile: avatar3,
    role: "Full- Stack Developer",
    lastActivity: "Yesterday",
  },
  {
    name: "Amanda Darnell",
    email: "amandadarnell@example.com",
    profile: avatar4,
    role: "Digital Marketer",
    lastActivity: "3 May, 2023",
  },
  {
    name: "Patricia Murrill",
    email: "patriciamurrill@example.com",
    profile: avatar5,
    role: "Account Manager",
    lastActivity: "3 May, 2023",
  },
  {
    name: "Darshini Nair",
    email: "darshininair@example.com",
    profile: avatar6,
    role: "Front End Developer",
    lastActivity: "3 May, 2023",
  },
  {
    name: "Vivek Singh",
    email: "viveksingh@example.com",
    profile: avatar7,
    role: "Front End Developer",
    lastActivity: "Today",
  },
];

const menuList = [
  { title: "Action" },
  { title: "Another Action" },
  { title: "Something elese here" },
];
</script>
<template>
  <v-card class="h-100">
    <v-card-title class="d-flex align-center justify-space-between">
      <h4 class="text-h4">Teams</h4>
    </v-card-title>
    <v-divider />

    <v-table hover style="max-height: 420px">
      <thead>
        <tr>
          <th v-for="item in tableHeader" :key="item">
            {{ item }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in tableData" :key="item.name">
          <td>
            <div class="d-flex align-center">
              <v-avatar :image="item.profile" size="40" />
              <div class="pl-3">
                <router-link to="/" class="mb-n1 font-weight-7">
                  {{ item.name }}
                </router-link>
                <p class="text-caption">
                  {{ item.email }}
                </p>
              </div>
            </div>
          </td>
          <td class="min-w-50">
            {{ item.role }}
          </td>
          <td class="min-w-37">
            {{ item.lastActivity }}
          </td>
          <td>
            <v-menu location="start">
              <template v-slot:activator="{ props }">
                <icon-btn icon="tabler-dots-vertical" v-bind="props" size="small" />
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in menuList" :key="i" :value="item.title">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
