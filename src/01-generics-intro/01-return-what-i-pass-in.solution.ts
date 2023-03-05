import { Equal, Expect } from "../helpers/type-utils";

const returnWhatIPassIn = <T>(t: T) => {
  return t;
};

const one = returnWhatIPassIn(1);
const Lakers = returnWhatIPassIn("Lakers");

type tests = [
  Expect<Equal<typeof one, 1>>,
  Expect<Equal<typeof Lakers, "Lakers">>
];
