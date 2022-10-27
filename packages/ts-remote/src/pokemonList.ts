export type Pokemon = {
  name: string;
  type: string;
};

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    type: "Fire",
  },
  {
    name: "Bulbafoo",
    type: "Earth",
  },
];

const getList = (nameFilter: string) => pokemon.filter(({ name }) => name.includes(nameFilter));

export default getList;
