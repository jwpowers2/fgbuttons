<template>
  <div>
    <b-container fluid no-gutters="true">
      <b-row no-gutters="true" id="row-1" align-v="start"><b-col cols="12"></b-col></b-row>
      <b-row no-gutters="true" id="row-2" align-v="center"><b-col cols="12"></b-col></b-row>
      <b-row no-gutters="true" id="row-3" align-v="end">
        <b-col cols="9"></b-col>
        <b-col cols="3">
          <b-row v-show="showButton" v-for="row in arr" :key="row[1]">
            <b-col cols="6" v-for="item in row" :key="item" class="p-1"
              ><Button :iconName="item.icon" :buttonName="item.title" :variant="item.variant"
            /></b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row no-gutters="true" id="row-4">
        <b-col cols="11"></b-col>
        <b-col cols="1" id="button-column">
          <b-iconstack font-scale="1.5" v-if="!showButton" @click="clickButton">
            <b-icon icon="circle-fill" variant="info"></b-icon>
            <b-icon icon="plus" variant="dark"></b-icon>
          </b-iconstack>
          <b-iconstack v-else @click="clickButton" font-scale="1.5">
            <b-icon icon="circle-fill" variant="dark"></b-icon>
            <b-icon icon="x" variant="info"></b-icon
          ></b-iconstack>
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
        [
          { icon: "person-plus-fill", title: "New intake", variant: "info" },
          { icon: "person-dash-fill", title: "Discharge", variant: "danger" }
        ],
        [
          { icon: "geo-alt-fill", title: "Check in", variant: "secondary" },
          { icon: "geo-alt-fill", title: "Check out", variant: "primary" }
        ],
        [
          { icon: "flower2", title: "New medication", variant: "primary" },
          { icon: "heart-fill", title: "New treatment plan", variant: "warning" }
        ],
        [
          { icon: "info-square-fill", title: "New incident", variant: "danger" },
          { icon: "calendar-plus", title: "New calendar event", variant: "info" }
        ],
        [
          { icon: "calendar-event-fill", title: "New progress note", variant: "primary" },
          { icon: "calendar-fill", title: "New group note", variant: "secondary" }
        ]
      ],
      showButton: false
    };
  },
  components: {
    Button
  },
  methods: {
    clickButton() {
      this.showButton = !this.showButton;
    }
  }
};
</script>
<style scoped>
#row-1 {
  height: 16em;
  width: 100%;
  border: 1px dashed red;
}
#row-2 {
  height: 15em;
  width: 100%;
  border: 1px dashed green;
}
#row-3 {
  height: 15em;
  width: 100%;
  border: 1px dashed blue;
}
#row-4 {
  height: 2em;
  width: 100%;
}
#button-column {
  text-align: right;
  border: 1px dashed orange;
}
.container-fluid {
  margin-right: 0 !important;
  padding-right: 0 !important;
}
</style>
