import {User,users } from "./User";

export interface Post{
  content: string
  id: number
  author: string
  likes: number;
}

// @ts-ignore
export let posts: Post[] =[
  {
    content:"Hello, World!",
    id:1,
    author: "Ayan",
    likes:4
  },
  {
    content:"Chep chep chepak",
    id:2,
    author: "Ernar",
    likes: 1
  },
  {
    content:"Bye, bye World(",
    id:3,
    author: "Ayazhan",
    likes:5,
  }
]
