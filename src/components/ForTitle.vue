<template>
  <div id="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
#title {
  text-align: center;
  h1 {
    margin: 10px 0;
    font-size: 2em;
  }
}
</style>
