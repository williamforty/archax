interface Record {
  id: number;
  colleague: string;
}

const fakeDatabaseData: Array<Record> = [
  { id: 101, colleague: "Adam Bennett" },
  { id: 102, colleague: "Chris Davies" },
  { id: 103, colleague: "Edgar Flibbertigibbet" },
];

class Employee {
  public fetchAllRecords(): Array<number> {
    return fakeDatabaseData.map(({ id }) => id);
  }
}

export { Employee };
