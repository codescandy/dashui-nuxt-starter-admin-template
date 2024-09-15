<script setup>
import { SubGroup } from "./__code";

const open = ref(["Users", "Admin"]);

const admins = [
  ["Management", "tabler-users"],
  ["Settings", "tabler-settings"],
];

const cruds = [
  ["Create", "tabler-plus"],
  ["Read", "tabler-file"],
  ["Update", "tabler-reload"],
  ["Delete", "tabler-trash"],
];
</script>
<template>
  <div id="sub-group">
    <GlobalsIntro title="Sub Group">
      Using the <code>v-list-group</code> component you can create up to 2 levels in depth using the
      sub-group prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="SubGroup" background>
      <v-card class="mx-auto" max-width="374">
        <v-list v-model:opened="open">
          <v-list-item prepend-icon="tabler-home" title="Home" value="Home" />

          <v-list-group value="Users">
            <template #activator="{ props }">
              <v-list-item v-bind="props" prepend-icon="tabler-users" title="Users" />
            </template>

            <v-list-group value="Admin">
              <template #activator="{ props }">
                <v-list-item v-bind="props" title="Admin" />
              </template>

              <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
              />
            </v-list-group>

            <v-list-group value="Actions">
              <template #activator="{ props }">
                <v-list-item v-bind="props" title="Actions" />
              </template>

              <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                :value="title"
                :title="title"
                :prepend-icon="icon"
              />
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
