import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import LogoComp from "@/components/LogoComp.vue";

describe("LogoComp.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(LogoComp, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
