<template>
  <div>
    <b-button size="lg" class="b-color m-2">{{ buttonName }}</b-button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: { buttonName: String }
};
</script>
<style scoped>
.b-color {
  color: white;
  font-size: 15px;
  width: 100%;
}
</style>
