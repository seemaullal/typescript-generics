import { Equal, Expect } from "../helpers/type-utils";

function returnWhatIPassIn<T>(t: T) {
  return t;
}

const one = returnWhatIPassIn(1);
const lakers = returnWhatIPassIn("Lakers");

type tests = [
  Expect<Equal<typeof one, 1>>,
  Expect<Equal<typeof lakers, "Lakers">>,
];
