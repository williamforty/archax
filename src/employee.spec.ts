import { Employee } from "./employee";

describe("with no mock in place", () => {
  it("returns non-mocked values from fetchAllRecords", async () => {
    const employeeClass = new Employee();
    const result = await employeeClass.fetchAllRecords();

    expect(result).toEqual([101, 102, 103]);
  });
});

describe("with correctly mocked class method", () => {
  it("returns mocked values from fetchAllRecords", async () => {
    const employeeClass = new Employee();
    jest
      .spyOn(employeeClass, "fetchAllRecords")
      .mockImplementation(() => Promise.resolve([1, 2, 3]));

    const result = await employeeClass.fetchAllRecords();

    expect(result).toEqual([1, 2, 3]);
  });
});
