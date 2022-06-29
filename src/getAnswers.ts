const questionOneAnswer = () => {
  return "Quesion 1.\nThe curly brackets indicate an object, however each will be instantiated separately and will result in a separate object instance. Even though the objects will contain the same data, the instances are different, and therefore the comparision to check if they are equal will result in false. If instead we assigned a single instance of the object to the variable 'foo', and made the comparison 'foo === foo', then this would result in true, as in this case it is the same underlying object instance.";
};

const questionTwoAnswer = () => {
  return "Quesion 2.\nThe `for await (const a of [p1, p2, p3]) { ... }` and `[p1, p2, p3].forEach(async (p) { await p })` constructs are similar, but different in an important way. Both initiate the set of promises immediately, however use of await inside a forEach is a common mistake that often results in misleading behaviour, because the forEach completes immediately, and reference to the awaiting promises inside the loop is lost. Conversely, the `for await` construct will actually await each of the promises sequentially, and code execution following the `for await` statement will not be executed until all of the promises have successfully resolved. Incidentally, the `=>` is missing from between `async (p)` and  `{ await p }` in the question :)";
};

const questionXAnswer = () => {
  return "Quesion X.\n";
};

const getAnswers = () => {
  return [questionOneAnswer(), questionTwoAnswer()];
};

export { getAnswers };
