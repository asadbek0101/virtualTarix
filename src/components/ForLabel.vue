<template>
  <div class="label">
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.label {
  text-align: center;
  p {
    font-size: 16px;
  }
}
</style>
