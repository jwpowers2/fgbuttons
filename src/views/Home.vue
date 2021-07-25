<template>
  <div>
    <b-container>
      <b-row id="row-1"><b-col cols="12"></b-col></b-row>
      <b-row id="row-2"><b-col cols="12"></b-col></b-row>
      <b-row id="row-3">
        <b-col cols="9"></b-col>
        <b-col cols="3">
          <b-row v-for="row in arr" :key="row[1]">
            <b-col cols="6" v-for="item in row" :key="item"><Button :buttonName="item"/></b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      arr: [
        ["one", "two"],
        ["three", "four"],
        ["five", "six"],
        ["seven", "eight"]
      ]
    };
  },
  components: {
    Button
  }
};
</script>
<style scoped>
#row-1 {
  height: 30%;
  width: 100%;
}
#row-2 {
  height: 30%;
  width: 100%;
}
#row-3 {
  height: 30%;
}
</style>
