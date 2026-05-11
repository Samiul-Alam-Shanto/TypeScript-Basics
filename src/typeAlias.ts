type User = {
  id: number;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Samiul",
    middleName: "Alam",
    lastName: "Shanto",
  },
  gender: "male",
  contactNo: "0170000000",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Maimuna",
    middleName: "Sdiddqa",
    lastName: "Shanta",
  },
  gender: "female",
  contactNo: "0170000005",
  address: {
    division: "Chittagong",
    city: "Chittagong",
  },
};

// type alias in function
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => {
  return num1 + num2;
};
