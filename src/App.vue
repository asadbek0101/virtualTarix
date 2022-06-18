<template>
  <v-app>
    <v-app-bar app color="white" style="padding: 0 100px">
      <router-link to="/"
        ><h1 style="color: black">Online Tarix</h1></router-link
      >
      <v-spacer></v-spacer>
      <v-btn style="color: black" text to="/glassory">Tarix lug'ati</v-btn>
      <v-btn style="color: black" text to="/muzey"> Virtual muzey </v-btn>
    </v-app-bar>
    <v-main app>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style scoped lang="scss">
a {
  border-bottom: none;
}
.v-application a {
  color: white;
}
</style>
