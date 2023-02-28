import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import C from "../../packages/components/JContainer";

describe.concurrent("container", () => {
  it("j-container props", () => {
    const JContainer = C.components["JContainer"];
    const wrapper = mount(JContainer, {
      props: {
        direction: "horizontal",
        absolute: true,
        app: true,
      },
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(["is-absolute", "is-app"]));
  });

  it("j-container direction:vertical", () => {
    const JContainer = C.components["JContainer"];
    const wrapper = mount(JContainer, {
      props: { direction: "vertical" },
    });
    expect(wrapper.classes()).toContain("is-vertical");
  });
});
