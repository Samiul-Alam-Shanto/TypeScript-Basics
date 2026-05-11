//  -- ?: ternary operator: decision making
// -- ??: nullish coalescing operator: default value-- only works for null and undefined
// -- ?. Optional chaining: accessing nested properties safely

const biyerJonnoEligible = (age: number) => {
  age >= 21
    ? console.log("Biyer jonno eligible")
    : console.log("Biyer jonno eligible na");
};
biyerJonnoEligible(25);

const userTheme = undefined;
const theme = userTheme ?? "light"; // userTheme null or undefined holei light dekhabe
console.log(theme);

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string; // postalCode optional property
  };
} = {
  address: {
    city: "Dhaka",
    town: "Uttara",
  },
};

const postalCode = user.address?.postalCode;
