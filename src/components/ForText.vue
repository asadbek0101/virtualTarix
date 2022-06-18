<template>
  <div id="text">
    <p><span style="padding: 0 20px"></span> {{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
#text {
  p {
    font-size: 20px;
  }
}
</style>
