import { getMessage } from "./getMessage";

it("returns the correct message", () => {
  const message = getMessage();

  expect(message).toEqual("Hello world!");
});
