// array, object------ js e sob e object but ts e alada egula

let bazarList = ["egg", "milk", "sugar"]; // ekhane implicitly define kora je eta ekta string er array
let bazarList: string[] = ["egg", "milk", "sugar"];
bazarList.push(12); //ekhane error diye dibe cz string type er array te number push kora jabe na

// let mixedArr = ["egg", 12, "milk", 2]; //ekhane implicitly declare hoye gese
let mixedArr: (string | number)[] = ["egg", 12, "milk", 2];

mixedArr.push(true); //ekhane error dekhabe karon boolean type define kora nai

//! NEW TYPE TS----- TUPLE

let coordinates: [number, number] = [40, 74, 30]; // ekhane bole disi je coordinates ekta tuple jekhane prothom element number hobe ebong ditiyo element o number hobe mane 2 ata neya jabe bole disi..er beshi nite gelei error dibe

let couple: [string, string] = ["samiul", "maimuna"]; //egualke bole fixed length er tuple

let destination: [string, number, string] = ["dhaka", 120, "bangladesh"]; // ekhane bole disi je destination ekta tuple jekhane prothom element string hobe ebong ditiyo element number hobe ebong tritiyo element o string hobe mane 3 ata neya jabe bole disi..er beshi nite gelei error dibe

//! Reference type--- or object type

let user = {
  firstName: "Samiul",
  middleName: "Alam",
  lastName: "Shanto",
}; // eta implicitly bole disi

let user2: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Samiul",
  middleName: "Alam",
  lastName: "Shanto",
};
let user3: {
  firstName: string;
  middleName?: string; // ? dile bole disi je middleName optional mane jodi middleName na deya hoy tobe o kono problem hobe na... etake bole optional type
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Samiul",
  //   middleName: "Alam",
  lastName: "Shanto",
  isMarried: true,
};
let user4: {
  organization: "Programming Hero"; // etar mane holo ami chai ei property er value jeno kokhono change na kora jay.. ami value take type hisebe use korsi. !etake bola hoy LITERAL TYPE

  firstName: string;
  middleName?: string; // ? dile bole disi je middleName optional mane jodi middleName na deya hoy tobe o kono problem hobe na... etake bole optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Samiul",
  //   middleName: "Alam",
  lastName: "Shanto",
  isMarried: true,
};
