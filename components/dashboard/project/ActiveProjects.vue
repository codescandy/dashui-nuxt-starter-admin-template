<script setup>
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
import avatar4 from "/images/avatar/avatar-4.jpg";
import avatar5 from "/images/avatar/avatar-5.jpg";
import avatar6 from "/images/avatar/avatar-6.jpg";
import avatar7 from "/images/avatar/avatar-7.jpg";
import avatar8 from "/images/avatar/avatar-8.jpg";
import avatar9 from "/images/avatar/avatar-9.jpg";
import avatar10 from "/images/avatar/avatar-10.jpg";
import avatar11 from "/images/avatar/avatar-11.jpg";
import avatar12 from "/images/avatar/avatar-12.jpg";
import avatar13 from "/images/avatar/avatar-13.jpg";
import avatar14 from "/images/avatar/avatar-14.jpg";
import avatar15 from "/images/avatar/avatar-15.jpg";
import avatar16 from "/images/avatar/avatar-16.jpg";
import avatar17 from "/images/avatar/avatar-17.jpg";
import avatar18 from "/images/avatar/avatar-18.jpg";
import brandLogo1 from "/images/brand/other-brand-logo/1.svg";
import brandLogo2 from "/images/brand/other-brand-logo/2.svg";
import brandLogo3 from "/images/brand/other-brand-logo/3.svg";
import brandLogo4 from "/images/brand/other-brand-logo/4.svg";
import brandLogo5 from "/images/brand/other-brand-logo/5.svg";
import brandLogo6 from "/images/brand/other-brand-logo/6.svg";

const tableData = [
  {
    logo: brandLogo1,
    name: "Dropbox Design System",
    hours: "34",
    priority: 2,
    members: [avatar1, avatar2, avatar3, "+5"],
    progress: "15%",
  },
  {
    logo: brandLogo2,
    name: "Slack Team UI Design",
    hours: "47",
    priority: 1,
    members: [avatar4, avatar5, avatar6, "+5"],
    progress: "35%",
  },
  {
    logo: brandLogo3,
    name: "GitHub Satellite",
    hours: "120",
    priority: 3,
    members: [avatar7, avatar8, avatar9, "+1"],
    progress: "75%",
  },
  {
    logo: brandLogo4,
    name: "3D Character Modelling",
    hours: "89",
    priority: 2,
    members: [avatar10, avatar11, avatar12, "+5"],
    progress: "63%",
  },
  {
    logo: brandLogo5,
    name: "Webapp Design System",
    hours: "108",
    priority: "Track",
    members: [avatar13, avatar14, avatar15, "+5"],
    progress: "100%",
  },
  {
    logo: brandLogo6,
    name: "Github Event Design",
    hours: "120",
    priority: 3,
    members: [avatar16, avatar17, avatar18, "+1"],
    progress: "75%",
  },
];

const resolveStatusVariant = (status) => {
  if (status === 1)
    return {
      color: "error",
      text: "High",
    };
  if (status === 2)
    return {
      color: "warning",
      text: "Medium",
    };
  else
    return {
      color: "info",
      text: "Low",
    };
};
</script>

<template>
  <v-card class="h-100">
    <v-card-title class="d-flex align-center justify-space-between">
      <h4 class="text-h4">Active Projects</h4>
    </v-card-title>
    <v-divider />
    <v-table hover>
      <thead>
        <tr>
          <th>Project name</th>
          <th>Hours</th>
          <th>Priority</th>
          <th>Members</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.name">
          <td class="min-w-65">
            <v-avatar :image="item.logo" size="32" />
            <router-link to="/" class="pl-3 font-weight-7">
              {{ item.name }}
            </router-link>
          </td>
          <td>
            {{ item.hours }}
          </td>
          <td>
            <v-chip
              size="x-small"
              class="font-weight-6"
              :color="resolveStatusVariant(item.priority).color"
              label
            >
              {{ resolveStatusVariant(item.priority).text }}
            </v-chip>
          </td>
          <td>
            <div class="v-avatar-group">
              <template v-for="member in item.members" :key="member">
                <v-avatar v-if="member != '+1' && member != '+5'" size="32" :image="member" />
                <v-avatar v-else color="primary" size="32" :text="member" />
              </template>
            </div>
          </td>
          <td>
            <v-progress-linear
              :model-value="item.progress"
              height="8"
              :color="item.progress === '100%' ? 'success' : 'primary'"
            />
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-divider />
    <v-card-actions class="justify-center">
      <v-btn class="text-button" variant="flat">View All Projects</v-btn>
    </v-card-actions>
  </v-card>
</template>
