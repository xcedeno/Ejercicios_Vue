import { format } from 'date-fns';
import { inputDateFormat } from './constants';

const ourHeroes = [
  {
    id: 10,
    firstName: 'Christophe',
    lastName: 'Hammes',
    capeCounter: 1,
    originDate: format(new Date(1996, 5, 1), inputDateFormat),
    description: 'Networked',
  },
  {
    id: 20,
    firstName: 'Letha',
    lastName: 'Osinski',
    capeCounter: 3,
    originDate: format(new Date(1998, 7, 1), inputDateFormat),
    description: 'Decentralized',
  },
  {
    id: 30,
    firstName: 'Elenora',
    lastName: 'Schmitt',
    capeCounter: 2,
    originDate: format(new Date(1999, 8, 1), inputDateFormat),
    description: 'Organized',
  },
  {
    id: 40,
    firstName: 'Dolores',
    lastName: 'Kihn',
    capeCounter: 0,
    originDate: format(new Date(2000, 9, 1), inputDateFormat),
    description: 'Focused',
  },
];

export const data = {
  ourHeroes,
};
