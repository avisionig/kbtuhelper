import {Organization} from "./info";

export interface User{
  id: number;
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number?:string,
  organization:number,
  faculty:string
}
