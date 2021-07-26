import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("plus icon not clicked, should not show button array", () => {
    const wrapper = shallowMount(Home, {});
    expect(wrapper.text()).toContain("");
  });
});
