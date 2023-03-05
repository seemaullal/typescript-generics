import { Equal, Expect } from "../helpers/type-utils";

/**
 * This time, let's solve this with function overloads!
 */
const returnWhatIPassIn = (t: unknown) => {
  return t;
};

const one = returnWhatIPassIn(1);
const fun = returnWhatIPassIn("fun");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof fun, "fun">>];
