export interface User{
  id?: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}
export let users: User[]=[
  {
    id: 1,
    username: "",
    email: "",
    password: "",
    firstName: "Ayan",
    lastName: "Igali",
  },
  {
    id: 2,
    email: "",
    username: "",
    password: "",
    firstName: "Ernar",
    lastName: "Bekbolat",
  },
  {
    id: 3,
    email: "",
    username: "",
    password: "",
    firstName: "Ayazhan",
    lastName: "Baltabayeva",
  },
]
