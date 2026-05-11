"use strict";
// array, object------ js e sob e object but ts e alada egula
Object.defineProperty(exports, "__esModule", { value: true });
let bazarList = ["egg", "milk", "sugar"]; // ekhane implicitly define kora je eta ekta string er array
let bazarList = ["egg", "milk", "sugar"];
bazarList.push(12); //ekhane error diye dibe cz string type er array te number push kora jabe na
// let mixedArr = ["egg", 12, "milk", 2]; //ekhane implicitly declare hoye gese
let mixedArr = ["egg", 12, "milk", 2];
mixedArr.push(true); //ekhane error dekhabe karon boolean type define kora nai
//! NEW TYPE TS----- TUPLE
let coordinates = [40, 74, 30]; // ekhane bole disi je coordinates ekta tuple jekhane prothom element number hobe ebong ditiyo element o number hobe mane 2 ata neya jabe bole disi..er beshi nite gelei error dibe
let couple = ["samiul", "maimuna"]; //egualke bole fixed length er tuple
let destination = ["dhaka", 120, "bangladesh"]; // ekhane bole disi je destination ekta tuple jekhane prothom element string hobe ebong ditiyo element number hobe ebong tritiyo element o string hobe mane 3 ata neya jabe bole disi..er beshi nite gelei error dibe
//! Reference type--- or object type
let user = {
    firstName: "Samiul",
    middleName: "Alam",
    lastName: "Shanto",
}; // eta implicitly bole disi
let user2 = {
    firstName: "Samiul",
    middleName: "Alam",
    lastName: "Shanto",
};
let user3 = {
    firstName: "Samiul",
    //   middleName: "Alam",
    lastName: "Shanto",
    isMarried: true,
};
let user4 = {
    organization: "Programming Hero",
    firstName: "Samiul",
    //   middleName: "Alam",
    lastName: "Shanto",
    isMarried: true,
};
//# sourceMappingURL=nonPrimitive.js.map