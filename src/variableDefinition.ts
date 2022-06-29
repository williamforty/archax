interface SomeType {
  foo: string;
  boo: number;
}

const b: SomeType = { foo: "foo", boo: 99 };

const a: keyof typeof b = "foo";

const describeType = () =>
  `Variable "a" is defined as "keyof typeof b", which means it can only contain the values "foo" and "boo", which are propoerties of the object b`;

export { describeType };
