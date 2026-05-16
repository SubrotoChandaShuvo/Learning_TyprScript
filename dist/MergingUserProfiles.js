"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProfile(employee) {
    return `Name: ${employee.name}, Role: ${employee.role}`;
}
const emp = {
    name: "Rahim",
    age: 25,
    role: "Frontend Developer",
    salary: 50000
};
console.log(getProfile(emp));
//# sourceMappingURL=MergingUserProfiles.js.map