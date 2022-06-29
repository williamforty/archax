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
  public async fetchAllRecords(): Promise<Array<number>> {
    return Promise.resolve(fakeDatabaseData.map(({ id }) => id));
  }
}

export { Employee };
