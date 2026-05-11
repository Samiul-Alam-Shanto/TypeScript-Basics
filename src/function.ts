//Function
// Normal function and arrow function

function add(num1: number, num2: number): number {
  // pore number deya mane ki type return korbe seta bole deya
  // type define na korle implicitly eta any type dhore ney
  return num1 + num2;
}
// add(2, "2");
// add(2, 2);

//arrow function
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
// addArrow(2, "2");
// addArrow(2, 2);

//! OBJECT ER VITORE FUNCTION USE KORLE ETAKE METHOD BOLE

const poorUser = {
  name: "Samiul",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance; // ekhane this diye bujhai je balance property ta poorUser object er vitore ache
  },
};
console.log(poorUser.addBalance(100000));

// callback function

const arr: number[] = [1, 2, 3, 4, 5];
const sqrArr = arr.map((elm: number): number => elm * elm);
