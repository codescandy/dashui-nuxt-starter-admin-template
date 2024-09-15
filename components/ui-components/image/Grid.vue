<script setup>
import { Grid, GridComplex } from "./__code";
import image1 from "/images/components/image/1.jpg";
import image2 from "/images/components/image/2.jpg";
import image3 from "/images/components/image/3.jpg";
import image4 from "/images/components/image/4.jpg";
import image5 from "/images/components/image/5.jpg";
import image6 from "/images/components/image/6.jpg";
import image7 from "/images/components/image/7.jpg";
import image8 from "/images/components/image/8.jpg";
import image9 from "/images/components/image/9.jpg";

const img = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const imageLayout = [
  { cols: 4 },
  {
    cols: 8,
    children: [{ cols: 12 }, { cols: 12 }],
  },
  { cols: 6 },
  { cols: 3 },
  { cols: 9 },
  { cols: 4 },
  { cols: 8 },
];
</script>

<template>
  <div id="grid">
    <!-- Grid -->
    <div>
      <GlobalsIntro title="Grid">
        You can use <code>v-img</code> to make, for example, a picture gallery.
      </GlobalsIntro>
      <GlobalsCodePre :code="Grid">
        <v-row>
          <v-col v-for="items in img" :key="items" class="d-flex child-flex" cols="4">
            <v-img :src="items" :lazy-src="items" aspect-ratio="1" cover class="bg-background ma-1">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </GlobalsCodePre>
    </div>
    <!-- Complex Grid -->
    <div>
      <GlobalsIntro title="Complex Grid Layout">
        Build a more complex picture gallery layout using <code>flex-box</code> classes.
      </GlobalsIntro>
      <GlobalsCodePre :code="GridComplex">
        <v-row>
          <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
            <v-col :cols="image.cols">
              <v-img
                :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
                cover
                height="100%"
              ></v-img>
            </v-col>

            <v-col v-if="image.children" cols="6" class="d-flex flex-column">
              <v-row>
                <v-col
                  v-for="(children, childIdx) in image.children"
                  :key="childIdx"
                  :cols="children.cols"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                    cover
                    height="100%"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>
      </GlobalsCodePre>
    </div>
  </div>
</template>
d
