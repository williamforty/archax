import { divideAndConquer } from "./divideAndConquer";

const baseTimestamp = 1656000000050;
const hiredArray = [
  { dateHired: new Date(baseTimestamp + 50) },
  { dateHired: new Date(baseTimestamp + 30) },
  { dateHired: new Date(baseTimestamp + 20) },
  { dateHired: new Date(baseTimestamp + 80) },
  { dateHired: new Date(baseTimestamp + 10) },
];

const descendingHiredArray = [...hiredArray].sort((hireA, hireB) =>
  hireA.dateHired > hireB.dateHired ? -1 : 1
);

it("correctly sorts the hires", () => {
  const result = divideAndConquer(hiredArray);

  expect(result).toEqual(descendingHiredArray);
});
