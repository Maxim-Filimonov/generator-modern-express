describe("i am a test for client side code", () => {
  it("noticed that i have access to document", () => {
    expect(() => document.createElement("div")).not.toThrowError();
  });
});
