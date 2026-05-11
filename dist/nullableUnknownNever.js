"use strict";
//Nullable type
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (input) => {
    if (input) {
        console.log(`from db ${input}`);
    }
    else {
        console.log("from db ALL USER");
    }
};
// unknown type
const discountCalculator = (input) => {
    if (typeof input === "number") {
        console.log(`discount is ${input * 0.1}`);
    }
    else if (typeof input === "string") {
        // const splittedInput = input.split(" ");
        // const price = parseFloat(splittedInput[0]);
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1);
    }
    else {
        console.log("Wrong Input");
    }
};
discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);
//VOID
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("Error..");
//# sourceMappingURL=nullableUnknownNever.js.map