<script setup>
import { UserList } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";

const users = [
  {
    avatar: avatar1,
    name: "Caroline Black",
    status: "Online",
    lastVisited: "13 minutes ago",
  },
  {
    avatar: avatar2,
    name: "Alfred Copeland",
    status: "Away",
    lastVisited: "11 minutes ago",
  },
  {
    avatar: avatar3,
    name: "Celia Schneider",
    status: "Offline",
    lastVisited: "9 minutes ago",
  },
  {
    avatar: avatar4,
    name: "Max Rogan",
    status: "In Meeting",
    lastVisited: "28 minutes ago",
  },
];

const resolveStatusColor = {
  Online: "success",
  Away: "warning",
  Offline: "secondary",
  "In Meeting": "error",
};
</script>
<template>
  <div id="user-list">
    <GlobalsIntro title="User List" />
    <GlobalsCodePre :code="UserList" background>
      <v-card class="mx-auto" max-width="374">
        <v-list lines="two" border>
          <template v-for="(user, index) of users" :key="user.name">
            <v-list-item>
              <template #prepend>
                <v-avatar :image="user.avatar" />
              </template>
              <v-list-item-title>
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                <v-badge
                  dot
                  location="start center"
                  offset-x="2"
                  :color="resolveStatusColor[user.status]"
                  class="me-3"
                >
                  <span class="ms-4">{{ user.status }}</span>
                </v-badge>

                <span class="text-body-2 text-disabled">{{ user.lastVisited }}</span>
              </v-list-item-subtitle>

              <template #append>
                <v-btn size="small"> Add </v-btn>
              </template>
            </v-list-item>
            <v-divider v-if="index !== users.length - 1" />
          </template>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
