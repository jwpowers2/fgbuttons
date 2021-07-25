<template>
  <div>
    <b-button size="sm" class="b-color m-2" rounder="lg" variant="light" shadow="true"
      ><b-icon :icon="iconName" font-scale="1"></b-icon>{{ buttonName }}</b-button
    >
  </div>
</template>
<script>
export default {
  name: "Button",
  props: { buttonName: String, iconName: String }
};
</script>
<style scoped>
.b-color {
  font-size: 10px;
  width: 100%;
  box-shadow: -2px 2px #d6d6d6;
}
</style>
