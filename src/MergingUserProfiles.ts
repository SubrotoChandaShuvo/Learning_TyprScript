type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };



// Intersection Type
type Employee = Person & JobDetails;

function getProfile(employee: Employee): string {
  return `Name: ${employee.name}, Role: ${employee.role}`;
}


const emp: Employee = {
  name: "Rahim",
  age: 25,
  role: "Frontend Developer",
  salary: 50000
};

console.log(getProfile(emp));