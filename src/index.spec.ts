import "./index.js";
declare var window: any;
declare var a: any;

describe("example", () => {
  it("should work", () => {
    expect(a === "yes!");
  });

  it("does work", () => {
    expect(window.b === "ok");
  });
});

