<script setup>
import { Vertical } from "./__code";
const currentTab = ref("tab-1");
</script>

<template>
  <div id="vertical">
    <GlobalsIntro title="Vertical">
      The <code>vertical</code> prop allows for <code>v-tab</code> components to stack vertically.
    </GlobalsIntro>
    <GlobalsCodePre :code="Vertical" background>
      <v-card>
        <div class="d-flex">
          <div>
            <v-tabs v-model="currentTab" direction="vertical">
              <v-tab>
                <v-icon start icon="tabler-user" />
                Option 1
              </v-tab>

              <v-tab>
                <v-icon start icon="tabler-lock" />
                Option 2
              </v-tab>

              <v-tab>
                <v-icon start icon="tabler-access-point" />
                Option 3
              </v-tab>
            </v-tabs>
          </div>

          <v-card-text>
            <v-window v-model="currentTab" class="ms-3">
              <v-window-item value="tab-1">
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam
                  feugiat lorem non metus. Sed a libero.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero
                  tortor, tincidunt et, tincidunt eget.
                </p>
              </v-window-item>

              <v-window-item value="tab-2">
                <p class="mb-0">
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
                  convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices
                  tempus, mauris ipsum aliquam libero.
                </p>
              </v-window-item>

              <v-window-item value="tab-3">
                <p class="mb-0">
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui.
                  Proin viverra, ligula sit amet ultrices semper.
                </p>
              </v-window-item>
            </v-window>
          </v-card-text>
        </div>
      </v-card>
    </GlobalsCodePre>
  </div>
</template>
