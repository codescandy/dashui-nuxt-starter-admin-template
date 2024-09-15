<script setup>
import { Inset } from "./__code";
import avatar1 from "/images/avatar/avatar-1.jpg";
import avatar2 from "/images/avatar/avatar-2.jpg";
import avatar3 from "/images/avatar/avatar-3.jpg";
</script>

<template>
  <div id="inset">
    <GlobalsIntro title="Inset">
      <code>Inset</code> prop dividers are moved 72px to the right. This will cause them to line up
      with list items.
    </GlobalsIntro>
    <GlobalsCodePre :code="Inset">
      <v-card class="mx-auto" max-width="425">
        <v-list lines="two">
          <v-list-subheader>Today</v-list-subheader>

          <v-list-item :prepend-avatar="avatar1" title="Brunch this weekend?">
            <template #subtitle>
              <span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood
              doing errands this weekend. Do you want to hang out?
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item :prepend-avatar="avatar2">
            <template #title> Summer BBQ <span class="text-grey-lighten-1">4</span> </template>

            <template #subtitle>
              <span class="font-weight-bold">to Alex, Scott, Jennifer</span>
              &mdash; Wish I could come, but I'm out of town this weekend.
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item :prepend-avatar="avatar3" title="Oui oui">
            <template #subtitle>
              <span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris
              recommendations? Have you ever been?
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
