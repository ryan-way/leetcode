import { describe, expect, test } from "bun:test";

describe("Two Sum", () => {
  test("2 + 2", () => {
    expect(2 + 2).toBe(4);
  });
});

function arrayToSet(input: unknown): unknown {
  if (!Array.isArray(input)) {
    return input;
  }

  const mapped = input.map((value) => arrayToSet(value));

  return new Set(mapped);
}

expect.extend({
  toEqualWithoutOrder(received, expected) {
    if (!Array.isArray(expected) || !Array.isArray(received)) {
      return {
        message: "toEqualWithoutOrder should be called with arrays",
        pass: this.equals(expected, received),
      };
    }

    const expected_set = arrayToSet(expected);
    const received_set = arrayToSet(received);

    return {
      message: `${JSON.stringify(
        expected,
      )} not equal to received: ${JSON.stringify(received)}`,
      pass: this.equals(expected_set, received_set),
    };
  },
});
