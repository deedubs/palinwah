import mongoose from "mongoose";
import Message from "./";

describe("Message", () => {
  beforeAll(() => {
    return mongoose.connect("mongodb://localhost/palinwah_test");
  });

  afterAll(() => {
    return mongoose.disconnect();
  });

  it("should set isPalindrom if a string is a palindrome", () => {
    let testString = new Message({ body: "racecar" });

    return testString.save().then(result => {
      expect(result.isPalindrome).toEqual(true);
    });
  });

  it("should not set isPalindrom if a string is a palindrome", () => {
    let testString = new Message({ body: "kitty" });

    return testString.save().then(result => {
      expect(result.isPalindrome).toEqual(false);
    });
  });
});
