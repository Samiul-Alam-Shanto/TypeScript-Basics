// generic ta amra beshi use korbo funtion er khetre

// Generic function
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithObject = (value: { id: number; name: string }) => [value];
const arrString = createArrayWithString("Hello");
const arrNumber = createArrayWithNumber(42);
const arrObject = createArrayWithObject({ id: 1, name: "John" });

const crateArrayWithGeneric = <T>(value: T) => [value];

const arrString1 = crateArrayWithGeneric("Hello");
const arrNumber1 = crateArrayWithGeneric(42);
const arrObject1 = crateArrayWithGeneric({ id: 1, name: "John" });

const createArrayWithTuple = (param1: string, param2: number) => {
  [param1, param2];
};

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
  [param1, param2];
};

const res1 = createArrayTupleWithGeneric("Samiul", true);
const res2 = createArrayTupleWithGeneric(222, { name: "Samiul" });

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Samiul",
  hasPen: true,
};
const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};
const result1 = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);
console.log(result1, result2);
