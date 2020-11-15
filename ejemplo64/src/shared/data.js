const ourHeroes = [
  {
    id: 10,
    firstName: 'Christophe',
    lastName: 'Hammes',
    capeCounter: 1,
    originDate: new Intl.DateTimeFormat('es-CL').format(new Date(1996, 5, 1)),
    description: 'Networked',
  },
  {
    id: 20,
    firstName: 'Letha',
    lastName: 'Osinski',
    capeCounter: 3,
    originDate: new Intl.DateTimeFormat('es-CL').format(new Date(1998, 7, 1)),
    description: 'Decentralized',
  },
  {
    id: 30,
    firstName: 'Elenora',
    lastName: 'Schmitt',
    capeCounter: 2,
    originDate: new Intl.DateTimeFormat('es-CL').format(new Date(1999, 8, 1)),
    description: 'Organized',
  },
  {
    id: 40,
    firstName: 'Dolores',
    lastName: 'Kihn',
    capeCounter: 0,
    originDate: new Intl.DateTimeFormat('es-CL').format(new Date(2000, 9, 1)),
    description: 'Focused',
  },
];

export const data = {
  ourHeroes,
};
