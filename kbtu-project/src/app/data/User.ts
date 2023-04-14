export interface User{
  firstName: string
  lastName: string
  faculty: Faculty
  course: number
}

enum Faculty{
  SITE,BS,
}

export let users: User[]=[
  {
    firstName: "Ayan",
    lastName: "Igali",
    faculty: Faculty.SITE,
    course: 2,
  },
  {
    firstName: "Ernar",
    lastName: "Bekbolat",
    faculty: Faculty.SITE,
    course: 2,
  },
  {
    firstName: "Ayazhan",
    lastName: "Baltabayeva",
    faculty: Faculty.SITE,
    course: 2,
  },
]
