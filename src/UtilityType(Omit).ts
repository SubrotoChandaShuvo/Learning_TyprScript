interface UserAccount {
  id: number;
  username: string;
  password: string;
}

type PublicUser = Omit<UserAccount, "password">;

const user: PublicUser = {
  id: 1,
  username: "john_doe"
};

console.log(user);