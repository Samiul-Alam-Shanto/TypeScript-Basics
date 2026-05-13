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
