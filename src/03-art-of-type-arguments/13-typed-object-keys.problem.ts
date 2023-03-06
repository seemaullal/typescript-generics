import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// solution 1
// const typedObjectKeys = <TObj extends {}>(obj: TObj) => {
//   return Object.keys(obj) as Array<keyof TObj>;
// };

const typedObjectKeys = <TKey extends string>(obj: {
  [key in TKey]: unknown;
}) => {
  return Object.keys(obj) as Array<TKey>;
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
