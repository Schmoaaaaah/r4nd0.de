<template>
  <v-app dark>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="img/skyline.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
      :clipped-left="clipped"
      app
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-title>R4ND0</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab v-for="(item, i) in items" :key="i" :to="item.to">{{
            item.title
          }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
      >
        <router-view />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "About",
          to: "/about",
        },
        {
          title: "Projects",
          to: "/projects",
        },
      ],
    };
  },
});
</script>
