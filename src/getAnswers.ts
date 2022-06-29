import { describeType } from "./variableDefinition";

const questionOneAnswer = () => {
  return "Quesion 1.\nThe curly brackets indicate an object, however each will be instantiated separately and will result in a separate object instance. Even though the objects will contain the same data, the instances are different, and therefore the comparision to check if they are equal will result in false. If instead we assigned a single instance of the object to the variable 'foo', and made the comparison 'foo === foo', then this would result in true, as in this case it is the same underlying object instance.";
};

const questionTwoAnswer = () => {
  return "Quesion 2.\nThe `for await (const a of [p1, p2, p3]) { ... }` and `[p1, p2, p3].forEach(async (p) { await p })` constructs are similar, but different in an important way. Both initiate the set of promises immediately, however use of await inside a forEach is a common mistake that often results in misleading behaviour, because the forEach completes immediately, and reference to the awaiting promises inside the loop is lost. Conversely, the `for await` construct will actually await each of the promises sequentially, and code execution following the `for await` statement will not be executed until all of the promises have successfully resolved. Incidentally, the `=>` is missing from between `async (p)` and  `{ await p }` in the question :)";
};

const questionThreeAnswer = () => {
  return "Quesion 3.\nA Map in JavaScript of course is similar to an array, however it is one where there is an explicit key/value pair for each item it contains. Maps ensure that each key is unique. An object can achieve the same by using object properties, which can indeed be overwritten in the same way you might with a Map.set() call. An advantage of using a Map however is that it is easily iterable, and in a predictable order that corresponds with the order the items were inserted. There are also performance benefits of using a Map, when frequently adding/removing items based on the key. Therefore a good use case for a Map might be for maintaining a large in-memory list of items that is constantly changing. Perhaps something like a Redis in-memory database of items, where speed is an important factor.";
};

const questionFourAnswer = () => {
  return "Quesion 4.\nA common way to substitute a local JavaScript library or module is with `npm link`. Under the hood this works by creating a symbolic link to another directory. Whilst this works, in my experience it can be fiddly to use, particularly when combined with executing various other npm commands such as install. Another alternative might be to have a local npm registry. Once set up you could reroute the package manager to the local registry using .npmrc";
};

const questionFiveAnswer = () => {
  return "Quesion 5.\nPlease refer to src/payloadEncoding.ts, and the corresponding test file. To execute tests, execute `npm run build && npm run test`";
};

const questionSixAnswer = () => {
  return "Quesion 6.\nPlease refer to src/payloadEncoding.ts, and the corresponding test file. To execute tests, execute `npm run build && npm run test`";
};

const questionSevenAnswer = () => {
  return "Quesion 7.\nPlease refer to src/divideAndConquer.ts, and the corresponding test file. To execute tests, execute `npm run build && npm run test`";
};

const questionEightAnswer = () => {
  return `Quesion 8.\nPlease refer to src/variableDefinition.ts.\n\n${describeType()}`;
};

const questionNineAnswer = () => {
  return `Quesion 9.\nEnums are intended to be a static list of values representing a set of values for a given purpose. For example, there could be a use case for denoting a fixed list of models for a given car brand. This would work well as an enum type. Enums in TypeScript have a range of helper functions that fundamentally aim to assist with serving that original purpose to represent a fixed list of values. Objects on the other hand are mutable rather than being fixed. That is, objects are intended to be dynamic representations of some kind of data structure or entity, which can potentially adapt and be modified over time.`;
};

const questionTenAnswer = () => {
  return "Quesion 10.\nPlease refer to src/employee.spec.ts to view the required mock, and the corresponding src/employee.ts file to see the implementation of the Employee class, which is overridden by the mock. To execute tests, execute `npm run build && npm run test`";
};

const getAnswers = () => {
  return [
    questionOneAnswer(),
    questionTwoAnswer(),
    questionThreeAnswer(),
    questionFourAnswer(),
    questionFiveAnswer(),
    questionSixAnswer(),
    questionSevenAnswer(),
    questionEightAnswer(),
    questionNineAnswer(),
    questionTenAnswer(),
  ];
};

export { getAnswers };
