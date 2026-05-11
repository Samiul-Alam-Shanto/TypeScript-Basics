"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["David", "Eve"];
const collegeFriends = ["Frank", "Grace"];
friends.push(...schoolFriends);
friends.push(...collegeFriends);
console.log(friends);
const user = { name: "samiul", phone: "0170000000" };
const otherInfo = { age: 30, address: "Dhaka" };
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
//! Rest operator
// const sendInvitation = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`send invitation to ${friend1}`);
//   console.log(`send invitation to ${friend2}`);
//   console.log(`send invitation to ${friend3}`);
// };
// sendInvitation("chintu", "pintu", "tintu");
const sendInvitation = (...friends) => {
    friends.forEach((friend) => {
        console.log(`send invitation to ${friend}`);
    });
};
sendInvitation("chintu", "pintu", "tintu", "gintu", "hintu");
//# sourceMappingURL=spreadAndRest.js.map