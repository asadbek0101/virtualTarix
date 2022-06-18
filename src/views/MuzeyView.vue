<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="2" v-for="(item, i) in data" :key="i">
          <router-link :to="item.path">
            <v-card class="text-center py-3">
              {{ item.title }}
            </v-card>
          </router-link>
        </v-col>
      </v-row>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          path: "/muzey",
          title: "I BO'LIM",
        },
        {
          path: "/muzey/second",
          title: "II BO'LIM",
        },
        {
          path: "/muzey/threeth",
          title: "III BO'LIM",
        },
        {
          path: "/muzey/fourth",
          title: "IV BO'LIM",
        },
        {
          path: "/muzey/fiveth",
          title: "V BO'LIM",
        },
        {
          path: "/muzey/sixth",
          title: "VI BO'LIM",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
