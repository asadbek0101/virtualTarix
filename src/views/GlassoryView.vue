<template>
  <div>
    <div>
      <v-container>
        <v-row class="mt-5">
          <v-col xl="2" md="3">
            <div class="saidbar">
              <v-expansion-panels focusable>
                <v-expansion-panel v-for="(item, i) in array" :key="i">
                  <v-expansion-panel-header>{{
                    item.harfi
                  }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-for="(element, j) in item.data" :key="j">
                      <p
                        class="list-item"
                        @click="handleAlert(item.harfi, element.title)"
                      >
                        {{ element.title }}
                      </p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-col>
          <v-col xl="10" md="9">
            <v-card height="80vh" class="pa-5">
              <h1 class="text-center">{{ forTitle }}</h1>
              <p class="discreption">
                <span style="padding: 0 20px"></span> {{ forDiscreption }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forTitle: "Online tarix lug'ati",
      forDiscreption: "",
    };
  },
  computed: {
    array() {
      return this.$store.state.array;
    },
  },
  methods: {
    handleAlert(harf, title) {
      this.array.map((e) => {
        if (e.harfi == harf) {
          e.data.map((t) => {
            if (t.title == title) {
              this.forTitle = t.title;
              this.forDiscreption = t.discription;
            } else {
              console.log("Bunday title yoq");
            }
          });
        } else {
          console.log("Bunday harf yoq");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.saidbar {
  height: 80vh;
  padding: 20px;
  overflow: hidden;
  overflow-y: scroll;
}
.list-item {
  cursor: pointer;
  margin: 0;
  padding: 10px 2px;
  border-radius: 4px;
  transition: all 0.5s;
}
.discreption {
  font-size: 20px;
  margin-top: 20px;
}
</style>
