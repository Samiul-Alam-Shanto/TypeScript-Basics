// spread operator

const friends: string[] = ["Alice", "Bob", "Charlie"];
const schoolFriends: string[] = ["David", "Eve"];
const collegeFriends: string[] = ["Frank", "Grace"];

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

const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`send invitation to ${friend}`);
  });
};
sendInvitation("chintu", "pintu", "tintu", "gintu", "hintu");
