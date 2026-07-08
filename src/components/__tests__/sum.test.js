import { Sum } from "../Sum";

test("Sum of two number", () => {
  const result = Sum(4, 3);

  expect(result).toBe(7);
});
