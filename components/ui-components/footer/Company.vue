<script setup>
import { Company } from "./__code";
const links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];
</script>

<template>
  <div id="company-footer">
    <GlobalsIntro title="Company Footer">
      The <code>footer</code> component as a basic company footer with links.
    </GlobalsIntro>
    <GlobalsCodePre :code="Company">
      <v-footer color="background">
        <v-row justify="center" no-gutters>
          <v-btn v-for="link in links" :key="link" variant="text" class="mx-2" rounded="xl">
            {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Dash UI</strong>
          </v-col>
        </v-row>
      </v-footer>
    </GlobalsCodePre>
  </div>
</template>
