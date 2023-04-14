import {User,users } from "./User";

export interface Post{
  content: string
  id: number
  author: string
}

// @ts-ignore
export let posts: Post[] =[
  {
    content:"Hello, World!",
    id:1,
    author: "Ayan"
  },
  {
    content:"Chep chep chepak",
    id:2,
    author: "Ernar"
  },
  {
    content:"Bye, bye World(",
    id:3,
    author: "Ayazhan"
  }
]
