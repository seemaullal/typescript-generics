import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export const concatenateFirstNameAndLastName = <
  T extends { firstName: string; lastName: string }
>(
  user: T
) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

it("Should add fullName to an object which only contains firstName and lastName", () => {
  const users = [
    {
      firstName: "Amanda",
      lastName: "Gorman",
    },
  ];

  const newUsers = users.map(concatenateFirstNameAndLastName);

  expect(newUsers).toEqual([
    {
      firstName: "Amanda",
      lastName: "Gorman",
      fullName: "Amanda Gorman",
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<{ firstName: string; lastName: string } & { fullName: string }>
      >
    >
  ];
});

it("Should retain other properties passed in", () => {
  const users = [
    {
      id: 1,
      firstName: "Amanda",
      lastName: "Gorman",
    },
  ];

  const newUsers = users.map(concatenateFirstNameAndLastName);

  expect(newUsers).toEqual([
    {
      id: 1,
      firstName: "Amanda",
      lastName: "Gorman",
      fullName: "Amanda Gorman",
    },
  ]);

  type tests = [
    Expect<
      Equal<
        typeof newUsers,
        Array<
          { id: number; firstName: string; lastName: string } & {
            fullName: string;
          }
        >
      >
    >
  ];
});

it("Should fail when the object passed in does not contain firstName", () => {
  const users = [
    {
      firstName: "Amanda",
    },
  ];

  const newUsers = users.map(
    // @ts-expect-error
    concatenateFirstNameAndLastName
  );
});
