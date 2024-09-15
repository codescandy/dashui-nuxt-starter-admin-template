<script setup>
import { Basic } from "./__code";

const basicDialogs = ref(false);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      A dialog contains two slots, one for its activator and one for its content (default). Good for
      Privacy Policies.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-dialog v-model="basicDialogs" width="500">
        <!-- Activator -->
        <template #activator="{ props }">
          <v-btn v-bind="props"> Open Dialog</v-btn>
        </template>

        <!-- Dialog Content -->
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            Privacy Policy
            <icon-btn @click="basicDialogs = !basicDialogs">
              <v-icon icon="tabler-x" />
            </icon-btn>
          </v-card-title>
          <v-card-text>
            Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon
            biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll
            jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies
            croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups
            powder. Cake croissant halvah candy canes gummies.
          </v-card-text>

          <v-card-text class="d-flex justify-end">
            <v-btn @click="basicDialogs = false"> I accept </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </GlobalsCodePre>
  </div>
</template>
