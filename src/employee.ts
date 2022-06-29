interface Record {
  id: number;
  name: string;
}

const fakeDatabaseData: Array<Record> = [
  { id: 101, name: "Adam Bennett" },
  { id: 102, name: "Chris Davies" },
  { id: 103, name: "Edgar Flibbertigibbet" },
];

class Employee {
  public fetchAllRecords(): Array<number> {
    return fakeDatabaseData.map(({ id }) => id);
  }
}

export { Employee };
