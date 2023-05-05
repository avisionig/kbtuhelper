export interface Tag{
  id:number,
  name:string
}
export interface Post{
  content: string
  id: number
  author: number,
  tag: number,
}
