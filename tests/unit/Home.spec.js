import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

// test one
// click button and menu appears

// test two
// hover over an item and it has a different box-shadow

describe("Home.vue", () => {
  it("renders props.msg when passed", async () => {
    const wrapper = mount(Home, {});
    await wrapper.find(".b-iconstack").trigger("click");
    expect(wrapper.text()).contains("Check in");
  });
});
