import { divideAndConquer } from "./divideAndConquer";

const baseTimestamp = 1656000000050;
const hiredArray = [
  { dateHired: new Date(baseTimestamp + 50000) },
  { dateHired: new Date(baseTimestamp + 30000) },
  { dateHired: new Date(baseTimestamp + 20000) },
  { dateHired: new Date(baseTimestamp + 80000) },
  { dateHired: new Date(baseTimestamp + 10000) },
];

const descendingHiredArray = [...hiredArray].sort((hireA, hireB) =>
  hireA.dateHired > hireB.dateHired ? -1 : 1
);

it("correctly sorts the hires", () => {
  const result = divideAndConquer(hiredArray);

  expect(result).toEqual(descendingHiredArray);
});
