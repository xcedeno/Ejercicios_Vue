import axios from 'axios';
import { API } from './config';

const getHeroes = async () => {
  try {
    const res = await axios.get(`${API}/heroes.json`);
    
    let dataFull = parseList(res);
    var a = [new Date(2010, 8, 1), new Date(1912, 11, 2), new Date(2012, 3, 3), new Date(1999, 4, 6)];
  
    const heroes = dataFull.map( (datos,index) => {
      datos.originDate = new Intl.DateTimeFormat('es-CL').format(a[index]);
      return datos;
    });
    return heroes;

  } catch (error) {
    console.error(error);
    return [];
  }

};

let parseList = (response) => {
  if (response.status != 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list != 'object') {
    list = []
  }
  return list;
}

const updateHero = async function(hero) {
  try {
    const response = await axios.put(`${API}/heroes/${hero.id}`, hero);
    const updatedHero = parseItem(response, 200);
    return updatedHero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const data = {
  getHeroes,
  updateHero
};
