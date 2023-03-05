import { Equal, Expect } from "../helpers/type-utils";

function returnWhatIPassIn(t: 1): 1;
function returnWhatIPassIn(t: "fun"): "fun";
function returnWhatIPassIn(t: unknown) {
  return t;
}

const one = returnWhatIPassIn(1);
const fun = returnWhatIPassIn("fun");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof fun, "fun">>];
