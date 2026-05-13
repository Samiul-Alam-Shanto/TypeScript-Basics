"use strict";
// generic ta amra beshi use korbo funtion er khetre
Object.defineProperty(exports, "__esModule", { value: true });
// Generic function
const createArrayWithString = (value) => [value];
const createArrayWithNumber = (value) => [value];
const createArrayWithObject = (value) => [value];
const arrString = createArrayWithString("Hello");
const arrNumber = createArrayWithNumber(42);
const arrObject = createArrayWithObject({ id: 1, name: "John" });
const crateArrayWithGeneric = (value) => [value];
const arrString1 = crateArrayWithGeneric("Hello");
const arrNumber1 = crateArrayWithGeneric(42);
const arrObject1 = crateArrayWithGeneric({ id: 1, name: "John" });
const createArrayWithTuple = (param1, param2) => {
    [param1, param2];
};
const createArrayTupleWithGeneric = (param1, param2) => {
    [param1, param2];
};
const res1 = createArrayTupleWithGeneric("Samiul", true);
const res2 = createArrayTupleWithGeneric(222, { name: "Samiul" });
const addStudentToCourse = (studentInfo) => {
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
//# sourceMappingURL=genericFunction.js.map