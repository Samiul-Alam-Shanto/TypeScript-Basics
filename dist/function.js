"use strict";
//Function
// Normal function and arrow function
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    // pore number deya mane ki type return korbe seta bole deya
    // type define na korle implicitly eta any type dhore ney
    return num1 + num2;
}
// add(2, "2");
// add(2, 2);
//arrow function
const addArrow = (num1, num2) => {
    return num1 + num2;
};
// addArrow(2, "2");
// addArrow(2, 2);
//! OBJECT ER VITORE FUNCTION USE KORLE ETAKE METHOD BOLE
const poorUser = {
    name: "Samiul",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance; // ekhane this diye bujhai je balance property ta poorUser object er vitore ache
    },
};
console.log(poorUser.addBalance(100000));
// callback function
const arr = [1, 2, 3, 4, 5];
const sqrArr = arr.map((elm) => elm * elm);
//# sourceMappingURL=function.js.map