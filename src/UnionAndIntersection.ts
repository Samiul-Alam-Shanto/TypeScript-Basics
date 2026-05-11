//Union

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

getDashboard("subscriber"); // type define nai kora bolei error dicche

// intersection

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhurySaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Saheb",
  phoneNo: "017000000",
  designation: "Manager",
  teamSize: 5,
};
