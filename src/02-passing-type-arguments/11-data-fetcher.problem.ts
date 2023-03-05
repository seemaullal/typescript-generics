import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const fetchData = async <TData>(url: string) => {
  const data: TData = await fetch(url).then((response) => response.json());
  return data;
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>(
    "https://swapi.dev/api/people/2",
  );
  expect(data.name).toEqual("C-3PO");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
