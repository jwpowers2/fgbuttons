import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";
//iconName, buttonName, variant
describe("Button.vue", () => {
  it("renders props.msg when passed", () => {
    const iconName = "heart-fill";
    const buttonName = "New treatment plan";
    const variant = "warning";
    const wrapper = shallowMount(Button, {
      propsData: { iconName, buttonName, variant }
    });
    expect(wrapper.text()).toMatch(buttonName);
  });
});
