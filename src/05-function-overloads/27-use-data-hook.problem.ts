import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type GetDataType<T> = {
  getData: () => T;
};

type UseDataDefaultParams<T> = {
  fetchData: () => Promise<T>;
};

function useData<T>(
  params: UseDataDefaultParams<T>,
): GetDataType<T | undefined>;
function useData<T>(
  params: UseDataDefaultParams<T> & {
    initialData: T;
  },
): GetDataType<T>;
function useData<T>(
  params: UseDataDefaultParams<T> & {
    initialData?: T;
  },
): GetDataType<unknown> {
  let data = params.initialData;

  params.fetchData().then((d) => {
    data = d;
  });

  return {
    getData: () => data,
  };
}

it("Should return undefined if no initial data is passed", () => {
  const numData = useData({
    fetchData: () => Promise.resolve(1),
  });

  const data = numData.getData();

  type Test1 = Expect<Equal<typeof data, number | undefined>>;
});

it("Should NOT return undefined if initial data is passed", () => {
  const numData = useData({
    fetchData: () => Promise.resolve(1),
    initialData: 2,
  });

  const data = numData.getData();

  type Test1 = Expect<Equal<typeof data, number>>;
});
