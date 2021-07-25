<template>
  <div>
    <b-button size="sm" class="b-color m-2" variant="white" shadow="true" p="1"
      ><b-row>
        <b-col cols="1"></b-col>
        <b-col cols="2"><b-icon :icon="iconName" font-scale="2" :variant="variant"></b-icon></b-col
        ><b-col cols="8">{{ buttonName }}</b-col> <b-col cols="1"></b-col
      ></b-row>
    </b-button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: { buttonName: String, iconName: String, variant: String }
};
</script>
<style scoped>
.b-color {
  font-size: 10px;
  width: 100%;
  box-shadow: -2px 2px 5px #cccccc;
  text-align: left;
  padding: 0.5em;
  margin-top: 0 !important;
  margin-bottom: 5px !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
  border-radius: 5px;
}
.b-color:hover {
  box-shadow: -2px 2px 15px gray;
}
</style>
