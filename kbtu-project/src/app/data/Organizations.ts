export interface Organization {
  description: string;
  id: number;
  name: string;
}
export interface Organizations {
  id?: number
  name: string
  description: string
}

export const organizations = [
  {
    id: 1,
    name: 'KBTU Unit',
    description: 'KBTU Unit is a charitable student organization that creates kindness in the KBTU and beyond. Members of the organization are engaged in social projects, organize charity events and participate in various city events to raise funds for children in orphanages or for the treatment of patients.\n' +
      '        The KBTU Unit team supports the children\'s home “Zhania”: they hold holidays, contests and master classes, buy school supplies for schoolchildren by September 1 and gifts for the holidays, leisure activities are organized on Sunday and indoors for children.\n' +
      '        The main tradition of KBTU UNIT is to hold the Sweet Fair sweets fair at KBTU. Many student organizations and student government join this event. The fair sells sweets prepared by the students themselves.\n' +
      '        Members of the organization try to please students, teachers and workers of KBTU as often as possible.'
  },
  {
    id: 2,
    name: 'KBTU Art House',
    description: ' KBTU Art House brings together creative students who want to develop both their musical skills and organizational skills.\n' +
      '        Members of the organization are engaged in shooting video clips, recording cover `s, creating photo reports and photo projects, holding thematic events and parties. KBTU Art House also takes an active part in organizing the KBTU Dauysa competition.\n' +
      '        Students have created the KBTU Art House Band, a music group that is very popular with our young people.\n' +
      '        The organization aims to develop creative and creative thinking among students and seeks to diversify student life within the walls of the KBTU.'
  },
  {
    id: 3,
    name: 'KBTU IC "Everest"',
    description: '“KBTU IC Everest aims to develop students\' intellectual abilities and raise the status of KBTU in this direction. The club organizes both weekly games\n' +
      '          (Brain-ring, “What? Where? When?”, “Own Game”, Hamsa), and one-time events, such as “Film Quiz” or “Music Quiz”. The guys spend annually shooting the television version of the game “What? Where? When? ”At KBTU, actively participate in international games and organize city tournaments in intellectual games themselves.'
  },
  {
    id: 4,
    name: 'KBTU SPE SC',
    description: 'KBTU SPE SC (Society of Petroleum Engineers Student Chapter) is an international scientific student organization that deals with intellectual projects in the oil and gas industry.\n' +
      '          SPE mission: Collect, disseminate and exchange technical information in the field of exploration, development and exploitation of oil and gas fields, and other resources for the common good. Providing specialists with the opportunity to improve their professional skills and level of knowledge.\n' +
      '          Members of the organization hold and attend lectures on this topic, organize scientific events, such as "SPE Intellectual Petroleum Games", "Scientific Olympiads in the Oil and Gas Sphere" and conferences.'
  },
  {
    id: 5,
    name: 'KBTU Faces',
    description: 'The KBTU Society of Exploration Geophysicists Student Chapter (KBTU SEG SC) is a student organization under the auspices of the international organization SEG that carries out scientific and intellectual activities and follows the mission of the SEG - the advancement of geophysics. The organization is engaged in the promotion of geology within the walls of KBTU with the assistance of such companies as Schlumberger, Lloyd’s Register, etc.\n' +
      '          SEG enhances students\' ability to participate and create projects that solve issues and problems in this area. Members of the organization hold scientific and intellectual events, guest lectures and scientific conferences. In 2015, the geological intellectual game “GeoQuestions” was organized for the first time at KBTU with the participation of other universities. Moreover, the KBTU SEG helps students of the 2-3 FENGI courses in gaining work experience.\n' +
      '          The main tradition of KBTU UNIT is to hold the Sweet Fair sweets fair at KBTU. Many student organizations and student government join this event. The fair sells sweets prepared by the students themselves.\n' +
      '          Members of the organization try to please students, teachers and workers of KBTU as often as possible.'
  },
  {
    id: 6,
    name: 'Big City Lights Group',
    description: '\n' +
      '      KBTU Big City Lights conducts inter-university and university events, creates charity and entertainment projects, and also collaborates with youth organizations from other universities of the Republic of Kazakhstan.\n' +
      '      At the events held, the organizers create a space in which students reveal their talents, intellectual abilities and creative potential.\n' +
      '      Projects:\n' +
      '      Blind Dating\n' +
      '      Flashing Lights Party - A party in the style of flashing lights, combining the elite universities of Almaty, such as KBTU, KIMEP, MAB and UIB.\n' +
      '      The Last Samurai - An exciting game with an intriguing storyline in which each participant can feel like a real killer.\n' +
      '      BCL MovieNight is a great opportunity for movie lovers to devote an entire night to watching the premieres and discussing them.'
  }
]

export interface News{
  id: number;
  title: string;
  description: string;
  date: string;
}
export interface iEvent{
  id:number;
  name: string;
  description: string;
  date: string;
}
