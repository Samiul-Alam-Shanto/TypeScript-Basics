"use strict";
//Union
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else {
        return "Guest Dashboard";
    }
};
getDashboard("subscriber"); // type define nai kora bolei error dicche
const ChowdhurySaheb = {
    id: "123",
    name: "Chowdhury Saheb",
    phoneNo: "017000000",
    designation: "Manager",
    teamSize: 5,
};
//# sourceMappingURL=UnionAndIntersection.js.map