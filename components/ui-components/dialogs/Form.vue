<script setup>
import { Form } from "./__code";

const formDialogs = ref(false);
const firstName = ref("");
const middleName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const age = ref();
const interest = ref([]);
</script>

<template>
  <div id="form">
    <GlobalsIntro title="Form"> Just a simple example of a form in a dialog. </GlobalsIntro>
    <GlobalsCodePre :code="Form">
      <v-dialog v-model="formDialogs" max-width="600">
        <!-- Dialog Activator -->
        <template #activator="{ props }">
          <v-btn v-bind="props"> Open Dialog </v-btn>
        </template>

        <!-- Dialog Content -->
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            User Profile

            <icon-btn @click="formDialogs = !formDialogs">
              <v-icon icon="tabler-x" />
            </icon-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <global-text-field v-model="firstName" label="First Name" placeholder="John" />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <global-text-field v-model="middleName" label="Middle Name" placeholder="peter" />
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <global-text-field
                  v-model="lastName"
                  label="Last Name"
                  persistent-hint
                  placeholder="Doe"
                />
              </v-col>
              <v-col cols="12">
                <global-text-field v-model="email" label="Email" placeholder="johndoe@email.com" />
              </v-col>
              <v-col cols="12">
                <global-text-field
                  v-model="password"
                  label="Password"
                  autocomplete="on"
                  type="password"
                  placeholder="············"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <global-text-field v-model="age" label="Age" type="number" placeholder="18" />
              </v-col>
              <v-col cols="12" sm="6">
                <global-text-field
                  v-model="interest"
                  label="Interests"
                  placeholder="Sports, Music, Movies"
                />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text class="d-flex justify-end flex-wrap gap-3">
            <v-btn variant="tonal" color="secondary" class="ma-1" @click="formDialogs = false">
              Close
            </v-btn>
            <v-btn class="ma-1" @click="formDialogs = false"> Save </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </GlobalsCodePre>
  </div>
</template>
