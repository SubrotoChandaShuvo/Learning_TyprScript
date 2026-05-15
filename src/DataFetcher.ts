type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

function getZipCode(user: UserResponse): string {
  return user.info?.address?.zipCode ?? "00000";
}



const user1: UserResponse = {
  info: {
    address: {
      zipCode: "1207"
    }
  }
};

const user2: UserResponse = {};

console.log(getZipCode(user1)); // 1207
console.log(getZipCode(user2)); // 00000