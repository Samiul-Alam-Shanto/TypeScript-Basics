"use strict";
// object destructuring
// array destructuring
Object.defineProperty(exports, "__esModule", { value: true });
//object destructuring
const user = {
    id: 123,
    name: {
        firstName: "Samiul",
        middleName: "Alam",
        lastName: "Shanto",
    },
    age: 30,
    favoriteColor: "blue",
};
// const myFavoriteColor = user.favoriteColor;
// const myMiddleName = user.name.middleName;/
const { favoriteColor: myFavoriteColor, //etake name alias bole... ekhane type define kora jay na.. karon type agei object e define kore deya hobe.
name: { middleName: myMiddleName }, } = user;
// array destructuring
const friends = ["Alice", "Bob", "Charlie"];
// const myBestFriend = friends[2];
const [, , myBestFriend] = friends; // array destructuring er khetre index diye value access kora hoy... ekhane 2 diye bujhai je 2nd index er value ta amra myBestFriend variable e assign korte chai... array destructuring er khetre type define kora jay na.. karon type agei array e define kore deya hobe.
console.log(myBestFriend);
//# sourceMappingURL=destructuring.js.map