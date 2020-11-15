import axios from 'axios';

const getHeroes = async () => {
  const res = await axios.get('api/heros.json');

  var a = [new Date(2010, 8, 1), new Date(1912, 11, 2), new Date(2012, 3, 3), new Date(1999, 4, 6)];

  const heroes = res.data.map( (datos,index) => {
    datos.originDate = new Intl.DateTimeFormat('es-CL').format(a[index]);
    return datos;
  });
  console.log(heroes);
  return heroes;
};

export const data = {
  getHeroes,
};
